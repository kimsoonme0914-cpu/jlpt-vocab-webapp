import React, { useEffect, useState } from "react";
import { VOCAB_DATA } from "./vocabData";

function speakJapanese(text) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = 0.85;
  utter.pitch = 0.9;

  const voices = window.speechSynthesis.getVoices();
  const jaVoices = voices.filter((voice) => voice.lang.startsWith("ja"));

  if (jaVoices.length > 0) {
    const maleKeywords = ["male", "男", "otoya", "haruka", "takumi", "ken", "hiro"];
    const femaleKeywords = ["female", "女", "kyoko", "mizuki", "nanami", "o-ren"];

    let picked = jaVoices.find((voice) =>
      maleKeywords.some((keyword) => voice.name.toLowerCase().includes(keyword))
    );

    if (!picked) {
      picked = jaVoices.find(
        (voice) => !femaleKeywords.some((keyword) => voice.name.toLowerCase().includes(keyword))
      );
    }

    utter.voice = picked || jaVoices[0];
  }

  window.speechSynthesis.speak(utter);
}

const STORAGE_KEY = "jlpt-vocab-progress";

const C = {
  bg: "#FFF8F0",
  card: "#FFFFFF",
  primary: "#FF9BB3",
  primaryLight: "#FFD4DE",
  primaryDark: "#E8809A",
  secondary: "#B8D4F0",
  secondaryLight: "#DCE9F7",
  text: "#4A4A5A",
  textLight: "#8A8A9A",
  textDark: "#2A2A3A",
  success: "#7DD3A8",
  successLight: "#D4F0E0",
  border: "#F0E8E0",
  shadow: "rgba(0,0,0,0.06)",
  lavender: "#E8D8F0",
  mint: "#D0F0E0",
  peach: "#FFE8D8"
};

const font = "'Nanum Gothic', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const S = {
  app: {
    fontFamily: font,
    background: C.bg,
    minHeight: "100vh",
    maxWidth: 440,
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 24px 60px rgba(71, 47, 75, 0.08)"
  },
  header: {
    background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
    padding: "20px 20px 16px",
    color: "#fff",
    textAlign: "center"
  },
  headerTitle: { fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-0.5px" },
  headerSub: { fontSize: 12, opacity: 0.85, marginTop: 4 },
  badge: {
    background: C.primaryLight,
    color: C.primaryDark,
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700
  },
  card: {
    background: C.card,
    borderRadius: 16,
    margin: "8px 16px",
    padding: 20,
    boxShadow: `0 2px 12px ${C.shadow}`,
    border: `1px solid ${C.border}`
  },
  btn: (bg, color) => ({
    background: bg || C.primaryLight,
    color: color || C.textDark,
    border: "none",
    borderRadius: 12,
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: font
  }),
  btnFull: (bg, color) => ({
    background: bg || C.primary,
    color: color || "#fff",
    border: "none",
    borderRadius: 14,
    padding: "14px 0",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    fontFamily: font
  }),
  backBtn: {
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "6px 12px",
    fontSize: 12,
    cursor: "pointer",
    fontFamily: font
  }
};

function loadProgress() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function shuffleWords(words) {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentPart, setCurrentPart] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [progress, setProgress] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState(new Set());
  const [reviewMode, setReviewMode] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return undefined;

    window.speechSynthesis.getVoices();
    const handleVoicesChanged = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
  }, []);

  const saveProgress = (nextProgress) => {
    setProgress(nextProgress);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
    } catch {
      // Ignore storage failures.
    }
  };

  const getWords = () => {
    if (!currentPart || !currentDay) return [];
    return VOCAB_DATA[currentPart]?.days[currentDay]?.words || [];
  };

  const startStudy = (part, day, review = false) => {
    setCurrentPart(part);
    setCurrentDay(day);
    setReviewMode(review);

    const words = VOCAB_DATA[part]?.days[day]?.words || [];
    const learnedSet = new Set(progress[`${part}_${day}`]?.learned || []);
    let studyWords = review ? words.filter((_, index) => learnedSet.has(index)) : [...words];
    if (studyWords.length === 0) studyWords = [...words];

    setShuffledWords(shuffleWords(studyWords));
    setLearned(learnedSet);
    setCardIndex(0);
    setFlipped(false);
    setScreen("study");
  };

  const markLearned = (indexInShuffle) => {
    const words = getWords();
    const actualIndex = words.indexOf(shuffledWords[indexInShuffle]);
    if (actualIndex < 0) return;

    const nextLearned = new Set(learned);
    if (nextLearned.has(actualIndex)) nextLearned.delete(actualIndex);
    else nextLearned.add(actualIndex);
    setLearned(nextLearned);

    const key = `${currentPart}_${currentDay}`;
    saveProgress({
      ...progress,
      [key]: {
        learned: [...nextLearned],
        lastStudied: Date.now()
      }
    });
  };

  const getDayProgress = (part, day) => {
    const item = progress[`${part}_${day}`];
    if (!item) return 0;
    const total = VOCAB_DATA[part]?.days[day]?.words?.length || 20;
    return Math.round(((item.learned?.length || 0) / total) * 100);
  };

  const resetDay = (part, day) => {
    const nextProgress = { ...progress };
    delete nextProgress[`${part}_${day}`];
    saveProgress(nextProgress);
  };

  const nextCard = () => {
    if (cardIndex < shuffledWords.length - 1) {
      setCardIndex((prev) => prev + 1);
      setFlipped(false);
      return;
    }
    setScreen("complete");
  };

  const prevCard = () => {
    if (cardIndex === 0) return;
    setCardIndex((prev) => prev - 1);
    setFlipped(false);
  };

  if (screen === "home") {
    const totalWords = Object.values(VOCAB_DATA).reduce(
      (sum, part) => sum + Object.values(part.days).reduce((acc, day) => acc + day.words.length, 0),
      0
    );
    const totalLearned = Object.entries(VOCAB_DATA).reduce(
      (sum, [partKey, part]) =>
        sum +
        Object.keys(part.days).reduce(
          (acc, day) => acc + (progress[`${partKey}_${day}`]?.learned?.length || 0),
          0
        ),
      0
    );
    const totalPct = totalWords ? Math.round((totalLearned / totalWords) * 100) : 0;

    return (
      <div style={S.app}>
        <div style={S.header}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>📚</div>
          <h1 style={S.headerTitle}>JLPT 기출 단어장</h1>
          <div style={S.headerSub}>해커스 N5-N3 Day별 단어 학습</div>
        </div>

        <div style={{ padding: "16px 16px 8px", textAlign: "center" }}>
          <div style={{ ...S.card, margin: 0, background: `linear-gradient(135deg, ${C.peach}, ${C.lavender})`, border: "none" }}>
            <div style={{ fontSize: 13, color: C.textLight, marginBottom: 4 }}>전체 학습 현황</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: C.textDark }}>
              {totalLearned}
              <span style={{ fontSize: 14, fontWeight: 400, color: C.textLight }}> / {totalWords}</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.5)", borderRadius: 3, marginTop: 10, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${totalPct}%`, background: C.primary, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 11, color: C.textLight, marginTop: 6 }}>{totalPct}% 완료</div>
          </div>
        </div>

        {Object.entries(VOCAB_DATA).map(([partKey, part]) => {
          const dayKeys = Object.keys(part.days);
          const minDay = Math.min(...dayKeys.map(Number));
          const maxDay = Math.max(...dayKeys.map(Number));
          const partWords = Object.values(part.days).reduce((sum, day) => sum + day.words.length, 0);
          const partLearned = Object.keys(part.days).reduce(
            (sum, day) => sum + (progress[`${partKey}_${day}`]?.learned?.length || 0),
            0
          );
          const partPct = partWords ? Math.round((partLearned / partWords) * 100) : 0;
          const emoji = partKey === "PART1" ? "🌸" : partKey === "PART2" ? "🌿" : "🌏";
          const bg = partKey === "PART1" ? C.primary : partKey === "PART2" ? "#7DBBAE" : "#A0A0D0";

          return (
            <div key={partKey} style={{ padding: "8px 16px 4px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={S.badge}>{part.title}</span>
                {partPct > 0 && <span style={{ fontSize: 11, color: C.textLight }}>{partLearned}/{partWords} ({partPct}%)</span>}
              </div>
              <button onClick={() => { setCurrentPart(partKey); setScreen("dayList"); }} style={{ ...S.btnFull(bg), display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                Day {minDay}~{maxDay} 학습하기 {emoji}
              </button>
            </div>
          );
        })}

        <div style={{ textAlign: "center", padding: "12px 16px 24px", fontSize: 11, color: C.textLight }}>
          카드를 뒤집고, 외운 단어는 체크하면서 진도를 저장할 수 있어요.
        </div>
      </div>
    );
  }

  if (screen === "dayList" && currentPart) {
    const part = VOCAB_DATA[currentPart];

    return (
      <div style={S.app}>
        <div style={S.header}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button style={S.backBtn} onClick={() => setScreen("home")}>← 돌아가기</button>
            <span style={{ fontSize: 12, opacity: 0.8 }}>{part.title}</span>
          </div>
          <h1 style={{ ...S.headerTitle, marginTop: 10 }}>Day 선택</h1>
        </div>

        <div style={{ padding: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {Object.entries(part.days).map(([day, data]) => {
            const dayNumber = parseInt(day, 10);
            const pct = getDayProgress(currentPart, dayNumber);
            const learnedCount = progress[`${currentPart}_${day}`]?.learned?.length || 0;

            return (
              <div
                key={day}
                style={{ ...S.card, margin: 0, padding: 14, cursor: "pointer", position: "relative", overflow: "hidden" }}
                onClick={() => startStudy(currentPart, dayNumber)}
              >
                {pct > 0 && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: C.primaryLight }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: C.primary, borderRadius: 2 }} />
                  </div>
                )}
                <div style={{ fontSize: 11, color: C.primary, fontWeight: 700, marginBottom: 2 }}>DAY {day.padStart(2, "0")}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textDark, marginBottom: 6 }}>{data.theme}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: C.textLight }}>{learnedCount}/20 외움</span>
                  {pct === 100 && <span style={{ fontSize: 14 }}>✅</span>}
                  {pct > 0 && pct < 100 && <span style={{ fontSize: 10, color: C.primary }}>{pct}%</span>}
                </div>
                {learnedCount > 0 && (
                  <button
                    onClick={(event) => { event.stopPropagation(); startStudy(currentPart, dayNumber, true); }}
                    style={{ ...S.btn(C.secondaryLight), fontSize: 10, padding: "4px 8px", marginTop: 6, width: "100%" }}
                  >
                    복습하기 🔄
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (screen === "study" && shuffledWords.length > 0) {
    const word = shuffledWords[cardIndex];
    const words = getWords();
    const actualIndex = words.indexOf(word);
    const isLearned = learned.has(actualIndex);
    const pct = Math.round(((cardIndex + 1) / shuffledWords.length) * 100);
    const dayData = VOCAB_DATA[currentPart]?.days[currentDay];

    return (
      <div style={S.app}>
        <div style={S.header}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button style={S.backBtn} onClick={() => setScreen("dayList")}>← 목록</button>
            <span style={{ fontSize: 12, opacity: 0.8 }}>{reviewMode ? "🔄 복습" : `DAY ${String(currentDay).padStart(2, "0")}`} · {dayData?.theme}</span>
          </div>
        </div>

        <div style={{ padding: "12px 16px 4px", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 4, background: C.primaryLight, borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: C.primary, borderRadius: 2 }} />
          </div>
          <span style={{ fontSize: 11, color: C.textLight, whiteSpace: "nowrap" }}>{cardIndex + 1} / {shuffledWords.length}</span>
        </div>

        <div style={{ padding: "16px 16px", flex: 1 }}>
          <div
            onClick={() => setFlipped((prev) => !prev)}
            style={{
              ...S.card,
              margin: 0,
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: flipped ? `linear-gradient(135deg, ${C.mint}, ${C.secondaryLight})` : C.card,
              position: "relative",
              userSelect: "none"
            }}
          >
            {isLearned && <div style={{ position: "absolute", top: 12, right: 12, background: C.successLight, color: "#4A9A6A", padding: "2px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600 }}>외움 ✓</div>}
            {!flipped ? (
              <>
                <div style={{ fontSize: 42, fontWeight: 700, color: C.textDark, marginBottom: 12, lineHeight: 1.3 }}>{word.kanji}</div>
                <button
                  onClick={(event) => { event.stopPropagation(); speakJapanese(word.reading); }}
                  style={{ background: C.primaryLight, border: "none", borderRadius: 20, padding: "6px 16px", fontSize: 13, cursor: "pointer", color: C.primaryDark, fontFamily: font, marginBottom: 8 }}
                >
                  🔊 발음 듣기
                </button>
                <div style={{ fontSize: 13, color: C.textLight }}>터치해서 뒤집기 👆</div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.textDark, marginBottom: 8 }}>{word.kanji}</div>
                <div style={{ fontSize: 20, color: C.primary, fontWeight: 600, marginBottom: 8 }}>{word.reading}</div>
                <button
                  onClick={(event) => { event.stopPropagation(); speakJapanese(word.reading); }}
                  style={{ background: C.primaryLight, border: "none", borderRadius: 20, padding: "6px 16px", fontSize: 13, cursor: "pointer", color: C.primaryDark, fontFamily: font, marginBottom: 10 }}
                >
                  🔊 발음 듣기
                </button>
                <div style={{ width: 40, height: 2, background: C.border, borderRadius: 1, marginBottom: 8 }} />
                <div style={{ fontSize: 17, color: C.textDark, fontWeight: 500 }}>{word.meaning}</div>
              </>
            )}
          </div>
        </div>

        <div style={{ padding: "0 16px 8px" }}>
          <button onClick={() => markLearned(cardIndex)} style={{ ...S.btnFull(isLearned ? C.successLight : C.primaryLight, isLearned ? "#4A9A6A" : C.primaryDark), marginBottom: 10 }}>
            {isLearned ? "외움 해제 ✕" : "외웠어요 ✓"}
          </button>
        </div>

        <div style={{ display: "flex", gap: 10, padding: "0 16px 20px" }}>
          <button onClick={prevCard} disabled={cardIndex === 0} style={{ ...S.btn(cardIndex === 0 ? C.border : C.secondaryLight), flex: 1, opacity: cardIndex === 0 ? 0.4 : 1 }}>← 이전</button>
          <button onClick={nextCard} style={{ ...S.btn(C.primary, "#fff"), flex: 1 }}>{cardIndex === shuffledWords.length - 1 ? "완료 🎉" : "다음 →"}</button>
        </div>
      </div>
    );
  }

  if (screen === "complete") {
    const words = getWords();
    const learnedCount = learned.size;
    const dayData = VOCAB_DATA[currentPart]?.days[currentDay];

    return (
      <div style={S.app}>
        <div style={{ ...S.header, paddingBottom: 24 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
          <h1 style={S.headerTitle}>학습 완료!</h1>
          <div style={S.headerSub}>DAY {String(currentDay).padStart(2, "0")} · {dayData?.theme}</div>
        </div>

        <div style={{ ...S.card, textAlign: "center", margin: 16 }}>
          <div style={{ fontSize: 14, color: C.textLight, marginBottom: 8 }}>외운 단어</div>
          <div style={{ fontSize: 36, fontWeight: 700, color: C.primary }}>{learnedCount}<span style={{ fontSize: 16, color: C.textLight }}> / {words.length}</span></div>
          <div style={{ height: 6, background: C.primaryLight, borderRadius: 3, margin: "12px 0", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round((learnedCount / words.length) * 100)}%`, background: C.success, borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 13, color: C.textLight }}>{Math.round((learnedCount / words.length) * 100)}% 달성!</div>
        </div>

        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          <button onClick={() => startStudy(currentPart, currentDay)} style={S.btnFull()}>다시 학습하기 🔄</button>
          {learnedCount > 0 && learnedCount < words.length && (
            <button
              onClick={() => {
                const unlearned = shuffledWords.filter((item) => !learned.has(getWords().indexOf(item)));
                if (unlearned.length > 0) {
                  setShuffledWords(unlearned);
                  setCardIndex(0);
                  setFlipped(false);
                  setReviewMode(false);
                  setScreen("study");
                }
              }}
              style={S.btnFull(C.secondary, "#fff")}
            >
              못 외운 단어만 학습 📝
            </button>
          )}
          <button onClick={() => { resetDay(currentPart, currentDay); setScreen("dayList"); }} style={S.btnFull(C.border, C.textLight)}>진행 초기화 🗑️</button>
          <button onClick={() => setScreen("dayList")} style={S.btnFull(C.primaryLight, C.primaryDark)}>Day 목록으로 ←</button>
        </div>
        <div style={{ height: 24 }} />
      </div>
    );
  }

  return <div style={S.app}><div style={{ padding: 40, textAlign: "center", color: C.textLight }}>로딩 중...</div></div>;
}
