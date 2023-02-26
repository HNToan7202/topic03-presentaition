import React from "react";

export default function GitRelease() {
  /*write html css for Tạo release (phiên bản phát hành) trên GitHub
Mục đích tạo release là để chia sẻ đóng gói ứng dụng, cùng các ghi chú phát hành và các link tới các file tài liệu ứng dụng cho mọi người trong team, công ty có sửa dụng.
Release dựa trên Git tag, nó đánh dấu một điểm cụ thể ở lịch sử repository của ta. Các release được sắp xếp theo thời gian chúng được tạo trên GitHub.
Chỉ những user có quyền push lên repository mới có quyền tạo release.
Các bước tạo release:
 */

  return (
    <div>
      <h1>Tạo release (phiên bản phát hành) trên GitHub</h1>
      <p>
        Mục đích tạo release là để chia sẻ đóng gói ứng dụng, cùng các ghi chú
        phát hành và các link tới các file tài liệu ứng dụng cho mọi người trong
        team, công ty có sửa dụng. Release dựa trên Git tag, nó đánh dấu một
        điểm cụ thể ở lịch sử repository của ta. Các release được sắp xếp theo
        thời gian chúng được tạo trên GitHub. Chỉ những user có quyền push lên
        repository mới có quyền tạo release.
      </p>
      <h2>Các bước tạo release:</h2>
      <p>
        1. Trên trang chủ của repository, chọn tab{" "}
        <span className="highlight">Code</span>
      </p>
      <img src="https://i.imgur.com/0Z0QZ0M.png" alt="1" />
      <p>
        2. Chọn tab <span className="highlight">Releases</span>
      </p>
      <img src="https://i.imgur.com/0Z0QZ0M.png" alt="2" />
      <p>
        3. Chọn <span className="highlight">Draft a new release</span>
      </p>
      <img src="https://i.imgur.com/0Z0QZ0M.png" alt="3" />

      <p>
        4. Điền các thông tin cần thiết, sau đó chọn{" "}
        <span className="highlight">Publish release</span>
      </p>
      <img src="https://i.imgur.com/0Z0QZ0M.png" alt="4" />
    </div>
  );
}
