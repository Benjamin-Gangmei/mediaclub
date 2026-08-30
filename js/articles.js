// Replace these sample entries with approved student submissions.
const articles = [
  {
    id: "the-last-bus",
    title: "The Last Bus Home",
    category: "Story",
    image: "",
    image: "images/the-last-bus.jpg",
    author: "Student Writer",
    grade: "Class X",
    date: "August 2026",
    excerpt: "A quiet journey becomes a reflection on home, memory and the small moments we often overlook.",
    content: [
      "The bus was almost empty when I climbed aboard. Outside the window, the evening had already begun turning the town into a collection of blurred lights.",
      "I took the seat beside the window and watched familiar streets move past. There was something strangely comforting about seeing the same shops close for the night, the same people hurry home, and the same yellow lights appear one after another.",
      "For a few minutes, nobody spoke. The engine filled the silence. I thought about how quickly a normal day can disappear, and how the things that seem ordinary while we are living them can become the memories we miss most.",
      "When the bus finally stopped, I stepped down into the cool evening air. Home was only a short walk away. Somehow, after that ride, it felt a little closer than before."
    ]
  },
  {
    id: "between-the-lines",
    title: "Between the Lines",
    category: "Poetry",
    image: "",
    image: "images/between-the-lines.jpg",
    author: "Student Writer",
    grade: "Class IX",
    date: "August 2026",
    excerpt: "A poem about the thoughts we leave unsaid and the meanings hidden in ordinary moments.",
    content: [
      "There are words we never write,",
      "sentences that wait behind our teeth,",
      "and little truths that live quietly",
      "between the lines.",
      "Perhaps silence is not empty.",
      "Perhaps it is simply a page",
      "waiting for someone brave enough",
      "to begin."
    ]
  },
  {
    id: "why-students-should-write",
    title: "Why Students Should Write",
    category: "Article",
    image: "",
    author: "Student Writer",
    grade: "Class XI",
    date: "August 2026",
    excerpt: "Writing is more than an academic skill. It is a way to question, understand and communicate the world around us.",
    content: [
      "Students are often told that writing is important because it appears in examinations. But writing has a value far beyond marks.",
      "When we write, we learn to arrange our thoughts. An idea that feels confusing in our minds often becomes clearer once we try to put it into words. Writing also teaches us to notice details, ask questions and consider perspectives different from our own.",
      "A student magazine or school media club makes this process even more meaningful. It gives young writers an audience and gives readers the opportunity to discover ideas from people sitting in the same classrooms.",
      "We should therefore treat student writing not simply as an assignment, but as a form of expression. Every student has a story, an observation or a question worth sharing."
    ]
  },
  {
    id: "the-world-we-share",
    title: "The World We Share",
    category: "Opinion",
    image: "",
    author: "Student Writer",
    grade: "Class XII",
    date: "August 2026",
    excerpt: "An opinion piece on responsibility, community and the choices young people can make every day.",
    content: [
      "It is easy to think that big changes belong to governments, organisations or famous people. Yet our everyday choices shape the communities we live in.",
      "The way we speak to someone, the way we treat a shared space, the information we choose to pass on and the willingness to help another person are all small decisions with larger consequences.",
      "Young people do not have to wait until they are adults to participate in their communities. We can begin by paying attention, asking better questions and taking responsibility for what is within our reach.",
      "The world we share is built from countless small actions. That is precisely why our choices matter."
    ]
  },
  {
    id: "rain-on-the-roof",
    title: "Rain on the Roof",
    category: "Poetry",
    author: "Student Writer",
    grade: "Class VIII",
    date: "August 2026",
    excerpt: "A short meditation on rain, childhood and the comfort of listening to a familiar sound.",
    content: [
      "Rain taps softly on the roof,",
      "a rhythm older than my thoughts.",
      "The windows hold a silver world,",
      "and every road forgets its dust.",
      "I listen.",
      "For a moment, the whole house",
      "breathes with the rain."
    ]
  },
  {
    id: "a-small-act",
    title: "A Small Act",
    category: "Story",
    author: "Student Writer",
    grade: "Class VII",
    date: "August 2026",
    excerpt: "Sometimes kindness begins with an action so small that we almost forget we did it.",
    content: [
      "The notebook fell from her hands just as the bell rang. Pages scattered across the corridor, and everyone seemed to be in too much of a hurry to stop.",
      "One student turned back. He gathered the pages, carefully placed them between the covers and handed the notebook to her without saying much.",
      "She thanked him. He smiled and ran towards his classroom.",
      "Neither of them knew it then, but the moment stayed with her for the rest of the day. It reminded her that kindness does not always need an announcement. Sometimes it is simply noticing that someone needs help."
    ]
  }
];

function getArticle(id) {
  return articles.find(article => article.id === id);
}
