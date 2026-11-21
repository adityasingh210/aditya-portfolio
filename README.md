# Aditya Singh — Portfolio

Saara content `content/` folder me hai. Use **Pages CMS** (Notion jaisa editor) se badlo, Save karo, aur ek minute me site update ho jaayegi. Code chhune ki zaroorat nahi.

```
content/
  profile.json    naam, title, intro, quick facts, about, links, email
  projects.json   projects (image, tech stack, bullets, links)
  skills.json     skill groups
  coding.json     Codeforces / LeetCode — khaali hai to site pe section hidden
  sections.json   Education, Leadership, Achievements, Certifications + jo naya chahiye
public/media/     images (CMS upload yahin karta hai)
.pages.yml        CMS ka form setup (field limits yahin hain)
```

---

## Ek baar ka setup (~10 min)

### 1. GitHub pe daalo
```bash
cd aditya-portfolio
git init && git add . && git commit -m "portfolio"
# github.com pe naya repo banao (e.g. "portfolio"), fir:
git remote add origin https://github.com/adityasingh210/portfolio.git
git branch -M main && git push -u origin main
```

### 2. Vercel se connect karo
vercel.com → **Add New → Project** → GitHub repo choose karo → **Deploy**.
Settings already `vercel.json` me hain. Ab har commit pe site apne aap update hogi.

### 3. Pages CMS connect karo
app.pagescms.org → **Sign in with GitHub** → GitHub App install karo (sirf is repo ko access do) → repo choose karo.
Left menu me ye dikhega: Profile & hero, Projects, Skills, Coding profiles, Sections.

---

## Roz ka kaam

| Kya karna hai | Kahan |
|---|---|
| Naya project | **Projects** → *Add an entry* → fields bharo → Save |
| Project ka screenshot | Project → *Screenshot / cover* → upload. Koi bhi size chalega, 16:10 me crop hoga |
| Naya section (Internships, Research…) | **Sections** → *Add an entry* → heading + items → Save |
| Section chhupana | Us section me *Show on site* off kar do |
| Section top menu me daalna | *Add to top menu* on kar do |
| Order badalna | List me entries ko drag karke upar-neeche karo |
| Codeforces/LeetCode | **Coding profiles** → handle, url, stats bharo |
| Photo / résumé | **Profile & hero** → Photo / Résumé upload |

Save karte hi Pages CMS GitHub pe commit karta hai, aur Vercel ~1 minute me nayi site live kar deta hai.

## Design kyun nahi bigdega

- CMS me har text field ki length limit hai (title 32, summary 170…), isliye lamba text layout nahi todta. Site pe bhi summary 3 lines ke baad cut hoti hai.
- Images hamesha 16:10 me crop hoti hain. Image nahi hai ya path galat hai to card pe project ka naam ek tinted placeholder me dikhta hai.
- Koi bhi field khaali chhod do, wo hissa chupchap hide ho jaata hai. Khaali section, khaali project ya bina handle ke coding profile site pe nahi dikhte.
- Projects ki ginti odd ho jaaye to kisi ek pe **Show full width** on kar do, wo poori row le lega.

## Bina CMS ke edit karna
GitHub pe `content/projects.json` kholo → pencil icon → edit → Commit. Same result, bas JSON ke comma aur quotes ka dhyan rakhna.

## Local chalana
```bash
npm install
npm run dev      # http://localhost:5173
```

## Look badalna (optional)
`src/styles/tokens.css`: colours, project card tints, fonts (Instrument Serif + Instrument Sans) aur spacing sab yahin hain.
