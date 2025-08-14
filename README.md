# Thị Nở – PWA sẵn sàng publish (Tải về là dùng)
Gói này đã bao gồm: manifest, service worker, icon avatar Thị Nở, voice demo (nghe & trả lời).

## Publish siêu nhanh với GitHub Pages
1. Tạo repo `thino-demo` trên GitHub.
2. Upload toàn bộ file trong thư mục này lên nhánh `main` (root).
3. Vào **Settings → Pages** → Source: Deploy from a branch → Branch: `main / root`.
4. Link: `https://<tài-khoản>.github.io/thino-demo/` → mở trên iPhone/Android, **Add to Home Screen** để cài.

## Tính năng trong bản này
- PWA chuẩn iOS/Android (offline shell).
- Voice demo: nghe (SpeechRecognition) + đọc (SpeechSynthesis) bằng giọng Việt nếu máy có.
- Giao diện tối ưu mobile, câu chào mặc định: “Dạ em nghe anh”.

## Đổi tên/app/icon
- Sửa `manifest.json` → `name`, `short_name`.
- Thay icon: ghi đè `icon-180.png`, `icon-192.png`, `icon-512.png` (đã tạo từ avatar Thị Nở).

## Nâng cấp tiếp (tùy chọn)
- Kết nối API chứng khoán thực, tin tức đã kiểm chứng, TTS chất lượng cao (Zalo/ElevenLabs).

> Xem file PDF `HUONG_DAN_CAI_NHANH.pdf` để biết bước-by-bước có hình minh họa.
