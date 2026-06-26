# 之序 GEO / AEO 上線注意事項

> 本文件記錄「讓 AI 與搜尋引擎更容易找到、理解並推薦之序建案」的相關設定、
> 上線前必做事項與待補項目。對應分支：`feat/analytics-skeleton`。

---

## 一、已完成的設定（程式內，部署即生效）

| 項目 | 檔案 | 說明 |
|------|------|------|
| **JSON-LD 結構化資料** | `apps/web/src/index.html` | `@graph`：`Organization`（富華創新／原總太地產 3056）、`Product`+`Residence`（之序：地址、經緯度、56–77 坪、3–4 房、雙棟 20F/B3F、總價 3,500–4,800 萬、2027 Q4）、`FAQPage`（6 組問答） |
| **可見 FAQ 區塊** | `default.component.{html,ts,scss}` | `#faq` 區塊，原生 `<details>` 手風琴，文字與 JSON-LD 一致 |
| **llms.txt** | `apps/web/src/llms.txt` | 給 LLM 的純文字網站摘要，已在 `project.json` assets 註冊 |
| **robots.txt** | `apps/web/src/robots.txt` | 明確允許 GPTBot / OAI-SearchBot / PerplexityBot / ClaudeBot / Google-Extended / Applebot 等 AI 爬蟲 |
| **正式網域統一** | `index.html` / `sitemap.xml` | canonical / OG / sitemap 由測試網域改為 `https://www.fuhua-inno.com.tw/fhi-unveiling/` |

---

## 二、⚠️ 上線前必做（subpath 衍生問題）

本站正式網址是**子路徑** `https://www.fuhua-inno.com.tw/fhi-unveiling/`，以下兩點不處理會讓部分設定失效。

### A. robots.txt / sitemap.xml 在子路徑「不生效」

爬蟲只認**網域根目錄**的 `https://www.fuhua-inno.com.tw/robots.txt`。
部署在 `/fhi-unveiling/` 之下時，檔案會落在 `/fhi-unveiling/robots.txt`，**會被爬蟲忽略**。

**待辦：**
- [ ] 把 `apps/web/src/robots.txt` 內的 AI 爬蟲規則，併入**主站根目錄**的 `robots.txt`
- [ ] 在主站根 robots.txt 加上：`Sitemap: https://www.fuhua-inno.com.tw/fhi-unveiling/sitemap.xml`
- [ ] 到 **Google Search Console** 提交 sitemap、申請收錄
- [ ] （需與管理主網域 `fuhua-inno.com.tw` 的人協調）

> 註：JSON-LD、FAQ 區塊、llms.txt 都在頁面內容裡，**不受子路徑影響，正常運作**。

### B. 正式部署要確認 `base href = /fhi-unveiling/`

目前 `index.html` 是 `<base href="/" />`（本機開發用）。
部署到子路徑時，build 必須把 base href 設為 `/fhi-unveiling/`，否則相對路徑的 assets 會 404。

**待辦：**
- [ ] 確認 production build 的 `--base-href=/fhi-unveiling/`（參考過往 GitHub Pages `/zhixu-landing/` 的處理方式）

> 註：meta / OG / JSON-LD 內寫的都是**絕對網址**，不受 base href 影響；此項只影響頁面內相對 assets 載入。

---

## 三、待補項目（非阻塞，補了更好）

### 結構化資料可再補
- [ ] `postalCode`（建案完整郵遞區號）
- [ ] 實際單元數 / 戶數（`AggregateOffer.offerCount`）
- [x] ~~精確經緯度~~ → 已填 `24.1848, 120.6592`

### 站外訊號（對「被 AI 推薦」影響最大，行銷端執行）

AI 推薦不只看你自己網站怎麼說，更看「網路上大家怎麼說你」。資料一致、被多處提及的建案才會被拿出來比較。

- [ ] **Google 商家檔案**（接待中心）＋ Google 地圖標點
- [ ] **591 新建案**上架
- [ ] 新聞稿 / 房產媒體報導（建案曝光）
- [ ] 論壇討論（Mobile01、PTT home-sale 等）
- [ ] NAP（名稱／地址／電話）全網一致

---

## 四、驗證方式

- **JSON-LD 語法**：貼到 <https://validator.schema.org/> 或 Google [Rich Results Test](https://search.google.com/test/rich-results)
- **prerender 內容**：build 後檢查 `dist` 的 `index.html` 是否含 FAQ 文字（AI 爬蟲多半不跑 JS，內容須在靜態 HTML 內）
- **OG 預覽**：Facebook [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **AI 收錄**：上線數週後，於 ChatGPT / Perplexity 搜尋「水湳 單元八 大坪數 新建案」觀察是否被引用

---

## 五、建案事實速查（資料來源）

| 欄位 | 值 |
|------|-----|
| 案名 | 之序（富華創新之序 / 之序｜水湳 · 綠海星嶼） |
| 建設公司 | 富華創新股份有限公司（原總太地產，股票代號 3056） |
| 位置 | 台中市北屯區敦化路二段與經貿東路口，單元八重劃區（近水湳經貿園區） |
| 經緯度 | 24.1848, 120.6592 |
| 坪數 | 56–77 坪 |
| 房型 | 三至四房（純自住） |
| 建築規模 | 雙棟，地上 20 層／地下 3 層 |
| 總價帶 | 約 3,500 萬 – 4,800 萬元 |
| 預計完工 | 2027 年第四季 |
| 電話 | 04-2297-7777 |
| 官網 | https://www.fuhua-inno.com.tw/fhi-unveiling/ |
