# DEPLOY

## v45 deploy checklist

- Source root: `/Users/yj/Library/CloudStorage/GoogleDrive-jyjzzjtube@gmail.com/내 드라이브/조상이 도왔다/src/`
- Deploy root: `/Volumes/T7/WORKSPACE/josang_app_deploy/`
- Deploy script: `/Volumes/T7/WORKSPACE/control_center/scripts/deploy_josang_vercel.sh`
- Live URL: `https://korean-roots-journey.vercel.app/`

Pre-deploy checks run locally:
- `node --check app.js`
- `node --check sw.js`
- `node --check vendor/hanzi-writer/hanzi-writer.min.js`
- Playwright mobile QA at `http://127.0.0.1:5178/`
- Guard grep: no `font-weight: 800/900/500`, no `진짜맛집`, no `?v=44`, no `?v=43`, no `jsdelivr`

Deploy command:

```bash
/Volumes/T7/WORKSPACE/control_center/scripts/deploy_josang_vercel.sh
```

## 2026-06-21 deploy result

- Vercel deployment: `dpl_Cpte4m3yUhnKXVaNiCpMXGiV7hL6`
- Production URL: `https://korean-roots-journey-o2iagn7xr-jyjzzjtube-7700s-projects.vercel.app`
- Alias URL: `https://korean-roots-journey.vercel.app/`
- Live index: HTTP 200, static assets `?v=45`
- Live service worker: HTTP 200, `const BUILD = '45'`
- Live browser QA: home/tour/food/quiz/fun/region passed
- Service worker cache check: seeded `josang-v43`, reload installed `josang-v45`, `josang-v43` deleted
