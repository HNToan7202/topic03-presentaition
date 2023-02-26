import React from "react";
import "./styles.css";
export default function GitRelease() {
  /*write html css for Tạo release (phiên bản phát hành) trên GitHub
Mục đích tạo release là để chia sẻ đóng gói ứng dụng, cùng các ghi chú phát hành và các link tới các file tài liệu ứng dụng cho mọi người trong team, công ty có sửa dụng.
Release dựa trên Git tag, nó đánh dấu một điểm cụ thể ở lịch sử repository của ta. Các release được sắp xếp theo thời gian chúng được tạo trên GitHub.
Chỉ những user có quyền push lên repository mới có quyền tạo release.
Các bước tạo release:
 */

  return (
    <div className="">
      <h1>Tạo release (phiên bản phát hành) trên GitHub</h1>
      <img className="image" src="images/Version/gitRelease.jpg" alt="0" />{" "}
      <div className="f20">
        <p>
          Để có thể sử dụng git release trước tiên ta cần phải tạo tag cho dự án
          của mình.
        </p>
        <p>
          Mục đích tạo release là để chia sẻ đóng gói ứng dụng, cùng các ghi chú
          phát hành và các link tới các file tài liệu ứng dụng cho mọi người
          trong team, công ty có sửa dụng.{" "}
          <p>
            Release dựa trên Git tag, nó đánh dấu một điểm cụ thể ở lịch sử
            repository của ta. Các release được sắp xếp theo thời gian chúng
            được tạo trên GitHub.
          </p>{" "}
          Chỉ những user có quyền push lên repository mới có quyền tạo release.
        </p>
      </div>
      <h2>Các bước tạo phát hành dự án (Git Release)</h2>
      <p className="f20">
        1. Trên trang chủ của repository, chọn tab{" "}
        <span className="highlight">Code</span>
      </p>
      <img className="image" src="images/Version/release_b1.png" alt="0" />
      <p className="f20">
        2. Chọn vào dòng create a new <span className="highlight">release</span>
      </p>
      <img className="image" src="images/Version/release_b2.png" alt="0" />
      <p className="f20">
        3. Chọn <span className="highlight">Tag cần phát hành(release)</span>
      </p>
      <img className="image" src="images/Version/release_b3.png" alt="0" />
      <p className="f20">
        4. Điền các thông tin cần thiết, sau đó chọn{" "}
        <span className="highlight">Publish release</span>
      </p>
      <img className="image" src="images/Version/release_b4.png" alt="0" />
      <p className="f20">Hoàn thành phát hành dự án (Git Release) V1.0</p>
      <img className="image" src="images/Version/release_b5.png" alt="0" />
    </div>
  );
}
