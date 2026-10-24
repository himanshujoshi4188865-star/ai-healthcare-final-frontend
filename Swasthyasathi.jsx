import React, { useEffect, useState } from "react";

const translations = {
  en: {
    emergency:
      "For severe breathing difficulty, chest pain, heavy bleeding, or serious trauma:",
    call112: "Call 112 Now",
    tagline: "YOUR HEALTH, YOUR LANGUAGE",
    heroTitle: "Healthcare guidance, just a conversation away.",
    heroSub:
      "Speak naturally. Find the right type of care, discover public healthcare services, and understand government scheme information — in a language you're comfortable with.",
    ctaTalk: "Talk to SwasthyaSathi",
    ctaHospitals: "Find Public Hospitals",
    trustBadge: "Privacy-minded • Source-led • Built for everyone",

    card1Title: "Voice Health Guide",
    card1Sub: "Ask in your own words",
    card2Title: "Government Hospitals",
    card2Sub: "Find care & verified services",
    card3Title: "Health Schemes (PM-JAY)",
    card3Sub: "Eligibility & free cards",
    card4Title: "Senior Citizen Care",
    card4Sub: "Simple, high-contrast support",

    greeting: "Namaste! How can I help you today?",
    inputPrompt:
      "Tap the microphone to speak, or type your health question below.",
    inputPlaceholder:
      "Ask your health question (e.g. 'Stomach pain since yesterday')...",
    listening: "Listening to your voice...",
    tapToSpeak: "Tap to Speak",
    listenAudio: "Listen",
    pauseAudio: "Pause",

    doctorRecommendation:
      "A General Medicine clinician may be a reasonable first step",

    responseBody:
      "Stomach pain can have multiple causes, and this AI assistant does not provide a definitive diagnosis. If you experience severe or worsening pain, continuous vomiting, difficulty breathing, chest pain, black stool, or loss of consciousness, seek emergency care immediately. Otherwise, a qualified clinician at a Primary Health Centre (PHC) or Community Health Centre (CHC) can assess your condition.",

    redFlags: "Red Flag Symptoms",
    source:
      "Source: National Health Mission & Ministry of Health and Family Welfare",
    nearestHospital: "Find Nearest PHC / Hospital",
    urgentHelp: "Need Urgent Help?",
    urgentSub: "Don't wait for an AI reply",
    officialServices: "Official Health Services",
    trustTitle: "Designed Around Trust",
    noDiagnosis: "No AI Diagnosis",
    privacy: "Privacy First",
    publicSources: "Clear Public Sources",
    language: "Language",
  },

  hi: {
    emergency:
      "गंभीर सांस की तकलीफ, सीने में दर्द, भारी रक्तस्राव या गंभीर चोट की स्थिति में:",
    call112: "तुरंत 112 डायल करें",
    tagline: "आपका स्वास्थ्य, आपकी भाषा",
    heroTitle: "स्वास्थ्य सलाह, अब सिर्फ एक बातचीत की दूरी पर।",
    heroSub:
      "अपनी भाषा में सहजता से बोलें। सही प्रकार की चिकित्सा सहायता खोजें, सरकारी स्वास्थ्य सेवाएं देखें और स्वास्थ्य योजनाओं की जानकारी आसान भाषा में पाएं।",
    ctaTalk: "स्वास्थ्य साथी से बात करें",
    ctaHospitals: "सरकारी अस्पताल खोजें",
    trustBadge: "गोपनीयता • विश्वसनीय स्रोत • सबके लिए",

    card1Title: "आवाज से स्वास्थ्य सलाह",
    card1Sub: "अपनी भाषा में पूछें",
    card2Title: "सरकारी अस्पताल",
    card2Sub: "सत्यापित स्वास्थ्य सेवाएं खोजें",
    card3Title: "स्वास्थ्य योजनाएं (PM-JAY)",
    card3Sub: "पात्रता और आयुष्मान कार्ड",
    card4Title: "वरिष्ठ नागरिक सेवा",
    card4Sub: "सरल और स्पष्ट सहायता",

    greeting: "नमस्ते! आज मैं आपकी क्या सहायता कर सकता हूँ?",
    inputPrompt:
      "बोलने के लिए माइक दबाएं या नीचे अपना स्वास्थ्य सवाल लिखें।",
    inputPlaceholder:
      "अपना सवाल पूछें (उदा. 'कल से पेट में दर्द है')...",
    listening: "आपकी आवाज सुन रहे हैं...",
    tapToSpeak: "बोलने के लिए दबाएं",
    listenAudio: "सुनें",
    pauseAudio: "रोकें",

    doctorRecommendation:
      "सबसे पहले General Medicine डॉक्टर से परामर्श लेना उचित हो सकता है",

    responseBody:
      "पेट दर्द के कई कारण हो सकते हैं और यह AI सहायक अंतिम निदान नहीं देता। यदि दर्द बहुत तेज या बढ़ रहा है, लगातार उल्टी हो रही है, सांस लेने में कठिनाई, सीने में दर्द, काला मल या बेहोशी हो तो तुरंत आपातकालीन चिकित्सा सहायता लें। अन्यथा नजदीकी PHC या CHC में योग्य डॉक्टर से जांच करवाएं।",

    redFlags: "खतरे के संकेत",
    source: "स्रोत: राष्ट्रीय स्वास्थ्य मिशन एवं स्वास्थ्य मंत्रालय",
    nearestHospital: "नजदीकी PHC / अस्पताल खोजें",
    urgentHelp: "तुरंत सहायता चाहिए?",
    urgentSub: "AI के जवाब का इंतजार न करें",
    officialServices: "आधिकारिक स्वास्थ्य सेवाएं",
    trustTitle: "विश्वास को ध्यान में रखकर बनाया गया",
    noDiagnosis: "AI निदान नहीं करता",
    privacy: "गोपनीयता पहले",
    publicSources: "विश्वसनीय सार्वजनिक स्रोत",
    language: "भाषा",
  },

  mr: {
    emergency:
      "श्वास घेण्यास गंभीर त्रास, छातीत दुखणे, मोठ्या प्रमाणात रक्तस्राव किंवा गंभीर दुखापत असल्यास:",
    call112: "तातडीने 112 वर कॉल करा",
    tagline: "तुमचे आरोग्य, तुमची भाषा",
    heroTitle: "आरोग्य मार्गदर्शन, आता फक्त एका संभाषणाच्या अंतरावर.",
    heroSub:
      "तुमच्या भाषेत सहज बोला. योग्य वैद्यकीय सेवा शोधा, सरकारी रुग्णालयांची माहिती मिळवा आणि आरोग्य योजनांची माहिती समजून घ्या.",
    ctaTalk: "स्वास्थ्य साथीशी बोला",
    ctaHospitals: "सरकारी रुग्णालये शोधा",
    trustBadge: "गोपनीयता • अधिकृत स्रोत • सर्वांसाठी",

    card1Title: "व्हॉइस आरोग्य मार्गदर्शक",
    card1Sub: "तुमच्या शब्दांत विचारा",
    card2Title: "सरकारी रुग्णालये",
    card2Sub: "सत्यापित आरोग्य सेवा शोधा",
    card3Title: "आरोग्य योजना (PM-JAY)",
    card3Sub: "पात्रता आणि आयुष्मान कार्ड",
    card4Title: "ज्येष्ठ नागरिक सेवा",
    card4Sub: "सोपे आणि स्पष्ट मार्गदर्शन",

    greeting: "नमस्कार! मी तुम्हाला कशी मदत करू शकतो?",
    inputPrompt:
      "बोलण्यासाठी माईकवर टॅप करा किंवा खाली तुमचा आरोग्यविषयक प्रश्न लिहा.",
    inputPlaceholder:
      "तुमचा प्रश्न विचारा (उदा. 'कालपासून पोटात दुखत आहे')...",
    listening: "तुमचा आवाज ऐकत आहे...",
    tapToSpeak: "बोलण्यासाठी टॅप करा",
    listenAudio: "ऐका",
    pauseAudio: "थांबवा",

    doctorRecommendation:
      "सुरुवातीला General Medicine डॉक्टरांचा सल्ला घेणे योग्य ठरू शकते",

    responseBody:
      "पोटदुखीची अनेक कारणे असू शकतात आणि हा AI सहाय्यक अंतिम निदान करत नाही. जर वेदना तीव्र किंवा वाढत असतील, सतत उलट्या होत असतील, श्वास घेण्यास त्रास, छातीत दुखणे, काळे शौच किंवा बेशुद्धी असल्यास तातडीने वैद्यकीय मदत घ्या. अन्यथा जवळच्या PHC किंवा CHC मध्ये डॉक्टरांची तपासणी करून घ्या.",

    redFlags: "धोक्याची लक्षणे",
    source: "स्रोत: राष्ट्रीय आरोग्य अभियान आणि आरोग्य मंत्रालय",
    nearestHospital: "जवळचे PHC / रुग्णालय शोधा",
    urgentHelp: "तातडीची मदत हवी आहे?",
    urgentSub: "AI च्या उत्तराची वाट पाहू नका",
    officialServices: "अधिकृत आरोग्य सेवा",
    trustTitle: "विश्वास लक्षात घेऊन तयार केलेले",
    noDiagnosis: "AI निदान करत नाही",
    privacy: "गोपनीयता प्रथम",
    publicSources: "विश्वसनीय सार्वजनिक स्रोत",
    language: "भाषा",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [seniorMode, setSeniorMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const [query, setQuery] = useState(
    "Which doctor should I consult for stomach pain?"
  );

  const [hasResponse, setHasResponse] = useState(true);

  const t = translations[lang];

  // Scroll to chat
  const scrollToChat = () => {
    document
      .getElementById("chat-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Voice recognition
  const handleMicToggle = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert(
        "Speech recognition is not supported in this browser. Please use Google Chrome."
      );
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang =
      lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-IN";

    recognition.continuous = false;
    recognition.interimResults = false;

    setIsRecording(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setHasResponse(true);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      alert("Could not understand your voice. Please try again.");
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  // Text-to-speech
  const handleAudioToggle = () => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const text = `${t.doctorRecommendation}. ${t.responseBody}`;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang =
      lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-IN";

    speech.rate = 0.9;
    speech.pitch = 1;

    speech.onstart = () => {
      setIsPlayingAudio(true);
    };

    speech.onend = () => {
      setIsPlayingAudio(false);
    };

    speech.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(speech);
  };

  // Stop speech when component changes/unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Sample questions
  const sampleQuestions = [
    {
      text:
        lang === "hi"
          ? "पेट दर्द के लिए किस डॉक्टर से मिलना चाहिए?"
          : lang === "mr"
          ? "पोटदुखीसाठी कोणत्या डॉक्टरांना भेटावे?"
          : "Which doctor should I consult for stomach pain?",
    },
    {
      text:
        lang === "hi"
          ? "आयुष्मान भारत अस्पताल कैसे खोजें?"
          : lang === "mr"
          ? "आयुष्मान भारत रुग्णालय कसे शोधावे?"
          : "How do I find an Ayushman Bharat hospital?",
    },
    {
      text:
        lang === "hi"
          ? "क्या मैं PM-JAY के लिए पात्र हूं?"
          : lang === "mr"
          ? "मी PM-JAY साठी पात्र आहे का?"
          : "Am I eligible for PM-JAY coverage?",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F8FAF9] text-slate-800 font-sans ${
        seniorMode ? "text-lg" : "text-base"
      }`}
    >
      {/* Emergency Bar */}
      <aside
        aria-label="Emergency warning"
        className="bg-red-700 text-white px-4 py-3"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse" />

            <span className="font-bold text-sm">EMERGENCY:</span>

            <span className="text-red-100 text-sm">
              {t.emergency}
            </span>
          </div>

          <a
            href="tel:112"
            className="bg-white text-red-700 font-bold px-4 py-2 rounded-full text-sm hover:bg-red-50 transition"
          >
            📞 {t.call112}
          </a>
        </div>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-700 flex items-center justify-center text-white text-2xl">
              ❤️
            </div>

            <div>
              <div className="font-black text-xl text-slate-900">
                SwasthyaSathi{" "}
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                  AI
                </span>
              </div>

              <p className="hidden sm:block text-xs text-slate-500">
                Public Health Guidance Assistant
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSeniorMode(!seniorMode)}
              className={`px-3 py-2 rounded-lg border text-xs font-bold ${
                seniorMode
                  ? "bg-amber-100 border-amber-300 text-amber-900"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              👓 {seniorMode ? "Large Text ON" : "Senior Mode"}
            </button>

            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
              🌐{" "}
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-bold outline-none"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>

            <a
              href="tel:112"
              className="hidden md:block bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-bold"
            >
              🚨 112
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F3F7F5] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3 py-2 rounded-full text-xs font-bold">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                {t.tagline}
              </div>

              <h1 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                {t.heroTitle}
              </h1>

              <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-2xl">
                {t.heroSub}
              </p>

              <div className="flex flex-wrap gap-4 mt-7">
                <button
                  onClick={scrollToChat}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                >
                  🎙️ {t.ctaTalk} →
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://hospitals.pmjay.gov.in/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="bg-white border border-slate-200 hover:border-emerald-400 px-6 py-4 rounded-xl font-bold transition"
                >
                  🏥 {t.ctaHospitals}
                </button>
              </div>

              <div className="mt-5 text-sm font-semibold text-slate-500">
                🛡️ {t.trustBadge}
              </div>
            </div>

            {/* Hero Card */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-emerald-200 blur-3xl opacity-40 rounded-full" />

                <div className="relative bg-white border border-emerald-100 rounded-3xl p-8 shadow-xl text-center">
                  <div className="absolute -top-4 -right-3 bg-white border border-emerald-200 px-4 py-2 rounded-full shadow font-bold text-xs">
                    🎙️ Voice First AI
                  </div>

                  <div className="w-36 h-36 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-7xl">
                    🧑‍⚕️
                  </div>

                  <h2 className="text-xl font-black mt-5">
                    Dr. Swasthya Companion
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    Ready to guide you toward the right healthcare service.
                  </p>

                  <div className="mt-5 bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex justify-between text-sm font-bold text-emerald-800">
                    <span>🟢 Multiple Languages</span>
                    <span>24×7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={scrollToChat}
            className="text-left bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg hover:border-emerald-400 transition"
          >
            <div className="text-3xl">🎙️</div>
            <h3 className="font-bold mt-3">{t.card1Title}</h3>
            <p className="text-sm text-slate-500 mt-1">{t.card1Sub}</p>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://hospitals.pmjay.gov.in/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="text-left bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg hover:border-emerald-400 transition"
          >
            <div className="text-3xl">🏥</div>
            <h3 className="font-bold mt-3">{t.card2Title}</h3>
            <p className="text-sm text-slate-500 mt-1">{t.card2Sub}</p>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://pmjay.gov.in/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="text-left bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg hover:border-emerald-400 transition"
          >
            <div className="text-3xl">📋</div>
            <h3 className="font-bold mt-3">{t.card3Title}</h3>
            <p className="text-sm text-slate-500 mt-1">{t.card3Sub}</p>
          </button>

          <button
            onClick={() => setSeniorMode(!seniorMode)}
            className="text-left bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg hover:border-emerald-400 transition"
          >
            <div className="text-3xl">👴</div>
            <h3 className="font-bold mt-3">{t.card4Title}</h3>
            <p className="text-sm text-slate-500 mt-1">{t.card4Sub}</p>
          </button>
        </div>
      </section>

      {/* Chat Section */}
      <section
        id="chat-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="mb-8">
          <span className="text-xs font-bold text-emerald-700 tracking-wider">
            LET'S TALK
          </span>

          <h2 className="text-3xl font-black mt-2">
            {lang === "hi"
              ? "आपके शब्दों में आपका स्वास्थ्य।"
              : lang === "mr"
              ? "तुमच्या शब्दांत तुमचे आरोग्य."
              : "Your health, in your words."}
          </h2>

          <p className="text-slate-600 mt-2">
            Ask a general health question or find a healthcare service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Assistant */}
          <div className="lg:col-span-2 bg-white rounded-3xl border shadow-md p-6 sm:p-8">
            <div className="text-center mb-7">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">
                💚
              </div>

              <h3 className="text-xl font-bold mt-4">{t.greeting}</h3>

              <p className="text-sm text-slate-500 mt-2">
                {t.inputPrompt}
              </p>
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(question.text);
                    setHasResponse(true);
                  }}
                  className="px-3 py-2 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-xl text-xs font-medium"
                >
                  ✨ {question.text}
                </button>
              ))}
            </div>

            {/* Input */}
            <div
              className={`flex items-center gap-2 p-2 rounded-2xl border-2 ${
                isRecording
                  ? "border-red-500 bg-red-50"
                  : "border-emerald-300 bg-slate-50"
              }`}
            >
              <button
                onClick={handleMicToggle}
                className={`w-12 h-12 rounded-xl text-white flex items-center justify-center ${
                  isRecording
                    ? "bg-red-600 animate-pulse"
                    : "bg-emerald-700 hover:bg-emerald-800"
                }`}
                title={isRecording ? "Stop recording" : "Start recording"}
              >
                🎙️
              </button>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setHasResponse(true);
                  }
                }}
                placeholder={
                  isRecording ? t.listening : t.inputPlaceholder
                }
                className="flex-1 bg-transparent outline-none px-2 text-sm sm:text-base"
              />

              <button
                onClick={() => setHasResponse(true)}
                className="w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl"
              >
                ➜
              </button>
            </div>

            <div className="flex justify-between text-xs text-slate-400 mt-2 px-2">
              <span>🛡️ Safe guidance</span>
              <span>
                {t.language}: {lang.toUpperCase()}
              </span>
            </div>

            {/* Response */}
            {hasResponse && (
              <div className="mt-7 bg-[#F6FAF8] border border-emerald-200 rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200 pb-3">
                  <span className="text-xs font-bold text-emerald-800 uppercase">
                    🩺 General Clinical Guidance
                  </span>

                  <button
                    onClick={handleAudioToggle}
                    className={`px-3 py-2 rounded-full text-xs font-bold ${
                      isPlayingAudio
                        ? "bg-emerald-700 text-white"
                        : "bg-white text-emerald-800 border border-emerald-300"
                    }`}
                  >
                    {isPlayingAudio ? "⏸️ " : "🔊 "}
                    {isPlayingAudio ? t.pauseAudio : t.listenAudio}
                  </button>
                </div>

                <h4 className="text-lg font-bold mt-4">
                  {t.doctorRecommendation}
                </h4>

                <p className="text-sm text-slate-700 leading-relaxed mt-2">
                  {t.responseBody}
                </p>

                {/* Red flags */}
                <div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-900">
                  ⚠️{" "}
                  <strong>{t.redFlags}:</strong>{" "}
                  {lang === "hi"
                    ? "तेज या अचानक दर्द, लगातार उल्टी, सांस लेने में कठिनाई, सीने में दर्द, काला मल या बेहोशी।"
                    : lang === "mr"
                    ? "तीव्र वेदना, सतत उलट्या, श्वास घेण्यास त्रास, छातीत दुखणे, काळे शौच किंवा बेशुद्धी."
                    : "Severe sudden pain, continuous vomiting, breathing difficulty, chest pain, black stool, or loss of consciousness."}
                </div>

                <div className="mt-5 pt-4 border-t border-emerald-200 flex flex-wrap justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    {t.source}
                  </span>

                  <button
                    onClick={() =>
                      window.open(
                        "https://hospitals.pmjay.gov.in/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="text-xs font-bold text-emerald-800 hover:underline"
                  >
                    {t.nearestHospital} →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Emergency */}
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
              <div className="text-3xl">🚨</div>

              <h3 className="font-black text-red-900 mt-3">
                {t.urgentHelp}
              </h3>

              <p className="text-xs text-red-700 mt-1">
                {t.urgentSub}
              </p>

              <p className="text-sm text-red-800 mt-4 leading-relaxed">
                For serious or life-threatening symptoms, seek emergency
                medical care immediately.
              </p>

              <a
                href="tel:112"
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-xl mt-4"
              >
                📞 Call 112
              </a>
            </div>

            {/* Trust */}
            <div className="bg-white border rounded-3xl p-6">
              <h3 className="font-bold text-emerald-800 mb-5">
                🛡️ {t.trustTitle}
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900">
                    ✓ {t.publicSources}
                  </strong>
                  <p className="mt-1">
                    Information should be checked against official health
                    sources.
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900">
                    ✓ {t.noDiagnosis}
                  </strong>
                  <p className="mt-1">
                    The assistant provides guidance, not a definitive
                    diagnosis.
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900">
                    ✓ {t.privacy}
                  </strong>
                  <p className="mt-1">
                    Avoid entering sensitive personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Services */}
            <div className="bg-white border rounded-3xl p-6">
              <h3 className="font-bold mb-4">
                🇮🇳 {t.officialServices}
              </h3>

              <div className="space-y-2">
                <a
                  href="https://pmjay.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl text-sm font-semibold"
                >
                  Ayushman Bharat PM-JAY ↗
                </a>

                <a
                  href="https://esanjeevani.mohfw.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl text-sm font-semibold"
                >
                  eSanjeevani Teleconsultation ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-4">
          <div className="text-sm text-slate-500">
            <strong className="text-slate-800">
              SwasthyaSathi AI
            </strong>{" "}
            • Public healthcare navigation initiative.
          </div>

          <div className="flex gap-4 text-sm">
            <button onClick={() => setLang("en")}>English</button>
            <button onClick={() => setLang("hi")}>हिंदी</button>
            <button onClick={() => setLang("mr")}>मराठी</button>
          </div>
        </div>
      </footer>
    </div>
  );
}