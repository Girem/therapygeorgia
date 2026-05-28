# TherapyGeorgia.ge Content Guidelines

This file is the shared context for Codex chats that create or optimize content for TherapyGeorgia.ge.

Use it before working on:
- blog posts
- website copy and SEO
- social media content
- translations and content repurposing

## Brand

TherapyGeorgia.ge is a professional psychotherapy website for clients in Georgia, led by Giorgi Iremashvili, MD.

The brand should feel:
- calm
- humane
- trustworthy
- thoughtful
- grounded in professional care
- accessible to people who may be anxious, confused, or hesitant about therapy

Avoid sounding:
- sensational
- overly clinical
- mystical
- judgmental
- sales-heavy
- falsely certain
- fear-based

## Core Positioning

TherapyGeorgia.ge presents psychotherapy as a real human conversation that helps people understand themselves, their emotions, relationships, choices, and life direction.

Important themes:
- client-centered psychotherapy
- humanistic therapy
- existential therapy
- integrated psychotherapy
- philosophical counseling where appropriate
- emotional clarity
- self-understanding
- responsibility and freedom
- meaning, relationships, anxiety, depression, crises, and personal growth

## Audience

Primary audience:
- Georgian-speaking adults considering therapy
- people in Tbilisi or Georgia looking for psychotherapy
- people who feel anxiety, depression, emotional heaviness, relationship difficulty, burnout, grief, life crisis, or confusion
- people unsure whether they need a psychologist, psychotherapist, or psychiatrist

Secondary audience:
- people interested in self-development, philosophy, emotional literacy, and mental health education
- potential clients comparing specialists online

Write for people who may be intelligent and reflective, but not clinically trained.

## Language

Default language is Georgian (`ka`).

Use English or Russian only when the user specifically asks for it, or when preparing multilingual variants.

Georgian style:
- use clear modern Georgian
- prefer natural, spoken-but-polished sentences
- avoid stiff academic phrasing unless the topic requires it
- avoid excessive jargon
- explain professional terms in plain language
- use "თქვენ" for direct address in website copy when appropriate
- use "თქვენ" as the default form of address in blog posts and website copy
- use "შენ" only if the user explicitly asks for a more informal piece
- use a short hyphen (`-`) instead of a long dash

## Tone

The tone should be:
- warm but not sentimental
- professional but not distant
- thoughtful but not abstract
- reassuring but not overpromising
- practical but not simplistic

Good tone examples:
- "ეს სტატია იმისთვისაა, რომ არჩევანი უფრო ნათელი გახდეს."
- "თუ ეჭვობ, რა გჭირდება, პირველი შეხვედრა შეიძლება სწორედ ამის გარკვევას დაეხმაროს."
- "თერაპია არ არის სწრაფი პასუხების მიწოდება. ეს არის სივრცე, სადაც საკუთარი გამოცდილება უფრო გასაგები ხდება."

Avoid:
- "ჩვენ გარანტიას გაძლევთ"
- "ეს მეთოდი ყველას ეხმარება"
- "უბრალოდ იფიქრე პოზიტიურად"
- "შენ აუცილებლად განიკურნები"
- "საუკეთესო ფსიქოთერაპევტი საქართველოში"

## Clinical And Ethical Boundaries

Content must not replace medical advice, diagnosis, emergency care, or psychiatric treatment.

When writing about severe symptoms, include appropriate caution:
- suicidal thoughts
- self-harm
- psychosis
- severe depression
- panic attacks that disrupt daily functioning
- inability to sleep for extended periods
- substance misuse
- risk to self or others

For urgent risk, advise contacting emergency services or a qualified medical professional immediately.

Do not:
- diagnose the reader
- promise outcomes
- present therapy as a substitute for medication when psychiatric care may be needed
- shame medication or psychiatry
- make unsupported medical claims
- imply that trauma, depression, or anxiety can be solved through willpower alone

## SEO Principles

Every blog post should include:
- clear Georgian title
- SEO title, if different from the H1
- meta description around 140-160 characters when possible
- suggested URL slug
- category/tag
- estimated reading time
- internal link suggestions
- a soft CTA to book a consultation or learn more

Prefer search-friendly topics such as:
- ფსიქოთერაპია თბილისში
- ფსიქოთერაპევტი თბილისში
- ფსიქოლოგი თუ ფსიქოთერაპევტი
- შფოთვა
- დეპრესია
- პანიკური შეტევა
- ურთიერთობის პრობლემები
- თერაპიის დაწყება
- ეგზისტენციური თერაპია
- ჰუმანისტური თერაპია

SEO copy should stay human. Do not keyword-stuff.

## Blog Post Structure

Preferred blog structure:

1. Title
2. Short intro that names the reader's problem or question
3. Clear sections with H2 headings
4. Practical explanations, examples, or reflective questions
5. One short highlight/summary box if useful
6. Soft CTA near the end
7. Author note for Giorgi Iremashvili, MD

Recommended length:
- short educational article: 700-1,000 words
- standard SEO article: 1,000-1,600 words
- deeper conceptual article: 1,600-2,200 words

Use examples carefully. If using client-like examples, make them fictional and avoid details that imply a real person.

## Blog Publishing Notes

Existing blog pages are static HTML files in `/blog/`.

Do not publish or add a new post to the live blog flow until I have reviewed and edited the draft.

Default workflow:
1. Create outline or draft.
2. Wait for my review and edits.
3. Treat direct approval phrases like "დამტკიცებულია, გამოაქვეყნე" as permission to publish.
4. Only after approval, prepare publish-ready HTML and index updates.

Default draft workflow:
- save full blog drafts as Markdown files in `/blog/drafts/`, for example `/blog/drafts/new-topic.md`
- also provide the draft text in chat when useful for quick review
- keep drafts separate from live HTML pages until the user approves publishing

A draft file is not considered published unless it is added to the live blog pages and indexes.

When creating a publish-ready blog post, prepare:
- new HTML file in `/blog/`
- blog index card update in `/blog/index.html`
- homepage blog card update in `/index.html` if appropriate
- metadata: title, description, Open Graph title/description/url/image
- sitemap update if needed

Keep visual style consistent with existing blog pages:
- centered page max width
- calm typography
- teal accent color
- article tag
- article metadata
- readable article body
- author card
- consultation CTA

## Website Optimization Chat Role

Use this role for a Codex chat focused on website improvements:

```text
This chat is for optimizing TherapyGeorgia.ge.

Before suggesting or editing anything, read codex-content-system/CONTENT_GUIDELINES.md and inspect the relevant files in the repo.

Focus on technical SEO, page speed, accessibility, content structure, metadata, internal linking, UX clarity, mobile behavior, and implementation details. Keep the existing calm, professional TherapyGeorgia.ge style. When code changes are needed, make them directly and verify them.
```

## Blog Creation Chat Role

Use this role for a Codex chat focused on blog posts:

```text
This chat is for creating new blog posts for TherapyGeorgia.ge.

Before writing, read codex-content-system/CONTENT_GUIDELINES.md. Help with topic ideation, outlines, SEO titles, meta descriptions, full Georgian drafts, translations when requested, and publish-ready HTML. Save full drafts in /blog/drafts/ as Markdown files. If topic, audience, language, or target keyword is missing, ask briefly before drafting. Do not publish anything until I explicitly approve it.
```

## Social Content Chat Role

Use this role for a Codex chat focused on social platforms:

```text
This chat is for creating social media content for TherapyGeorgia.ge.

Before writing, read codex-content-system/CONTENT_GUIDELINES.md. Help create Instagram, Facebook, LinkedIn, carousel, reel script, story, and content-calendar ideas. Keep the tone warm, ethical, calm, and professional. Repurpose blog posts into short posts without making clinical promises or oversimplifying mental health topics. Do not treat content as final until I review it.
```

## Social Content Defaults

For Instagram/Facebook posts:
- start with a clear, human hook
- keep paragraphs short
- avoid overusing hashtags
- use a gentle CTA such as "თუ ეს თემა შენთვის ახლობელია, შეგიძლია პირველი ნაბიჯი კონსულტაციით დაიწყო."

For carousels:
- slide 1: clear topic or question
- slides 2-6: one idea per slide
- final slide: reflective question or soft CTA

For reels:
- short opening line
- 3-5 concise points
- calm ending
- no fear-based hooks

## Quality Checklist

Before finalizing content, check:
- Is it clear who the reader is?
- Does it sound like TherapyGeorgia.ge?
- Is it clinically careful?
- Are claims modest and supportable?
- Is the CTA gentle?
- Is the Georgian natural?
- Does it use short hyphens instead of long dashes?
- Has the user reviewed and approved it before publishing?
- Does the title match the content?
- Is the piece useful even if the reader does not book a session?
