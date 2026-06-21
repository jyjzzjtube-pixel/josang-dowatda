# LOG

## 2026-06-21 v45 Codex HQ UX rebuild

- 하단 탭을 `홈 / 성씨찾기 / 지도 / 재미 / 보관함`으로 재정리했다.
- 홈 검색 CTA를 `내 성씨로 오늘 갈 곳 찾기`로 교체했다.
- 홈 카테고리를 `성씨 / 본관모름 / 관광지 / 맛집 / 퀴즈` 5개로 재구성했다.
- `오늘의 운세`는 핵심 카테고리에서 분리하고 `오늘의 재미 카드` 및 `재미` 탭으로 이동했다.
- 관광지·맛집 카드는 `공개자료 확인 / 자료 확인 단계` 배지와 출처·운영 확인 링크를 표시한다.
- 카테고리 클릭 후 해당 패널로 자동 스크롤되게 해 탐색 이탈을 줄였다.
- `BUILD`와 정적 자산 쿼리스트링을 45로 올렸다.
- Hanzi Writer 기본 charData loader 문자열도 로컬 `./vendor/hanzi-writer/data/`로 바꿔 외부 CDN 하드 의존 grep을 제거했다.

Evidence:
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/qa_summary.txt`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/hanja_loader_summary.txt`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/live_qa_summary.txt`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/live_sw_cache_summary.txt`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/home_top_mobile.png`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/home_tour_category.png`
- `/Volumes/T7/WORKSPACE/control_center/evidence/josang_app_v45_20260621/home_food_category.png`
