import React from "react";

export default function GitTag() {
  /*
  write html css for
   Tag là chức năng đặt tên một cách đơn giản của Git, nó cho phép ta xác định một cách rõ ràng các phiên bản mã nguồn (code) của dự án. Ta có thể coi tag như một branch không thay đổi được. Một khi nó được tạo (gắn với 1 commit cụ thể) thì ta không thể thay đổi lịch sử commit ấy được nữa.
Có 2 loại tag là annotated và lightweight
  */

  return (
    <div>
      <img
        className="image"
        src="https://3.bp.blogspot.com/-I1_32SkNVIw/WKV0tM4dR1I/AAAAAAAASPY/N29EPhQPPH4lhzl-8bp4z0Um1oDwYIt0QCLcB/s1600/delete-git-tag-from-remote-repository.png"
        alt="create tag"
      />
      <h1>Git Tag</h1>
      <img className="image" src="images/Version/code.png" alt="" />
      <h2>Một số lệnh thông dụng với tag trong Git</h2>
      <h3>1. Tạo tag</h3>
      <img className="image" src="images/Version/createaTag.png" alt="" />
      <h3>2. Xem danh sách tag</h3>
      <div className="f20">
        <p>Để xem danh sách tag, ta sử dụng lệnh git tag</p>
        <p>Ví dụ: git tag</p>
        <img className="image" src="images/Version/listTag.png" alt="" />
      </div>
      <h3>3. Xem thông tin tag</h3>
      <div className="f20">
        <p>
          Để xem thông tin tag, ta sử dụng lệnh git show{" "}
          <span className="highlight">tag_name</span>
        </p>
        <p>
          Ví dụ: git show <span className="highlight">v1.0</span>
        </p>
        <img className="image" src="images/Version/showTag.png" alt="" />
      </div>
      <h3>4. Xóa tag</h3>{" "}
      <div className="f20">
        <p>
          Để xóa tag, ta sử dụng lệnh git tag -d{" "}
          <span className="highlight">tag_name</span>
        </p>
        <p>
          Ví dụ: git tag -d <span className="highlight">v1.0</span>
        </p>
        <img className="image" src="images/Version/deleteTag.png" alt="" />
      </div>
      <h3>5. Push tag lên remote</h3>
      <div className="f20">
        <p>
          Để push tag lên remote, ta sử dụng lệnh git push origin{" "}
          <span className="highlight">tag_name</span>
        </p>
        <p>
          Ví dụ: git push origin <span className="highlight">v1.0</span>
        </p>
        <p>
          Để push tất cả tag lên remote, ta sử dụng lệnh git push origin --tags
        </p>
        <p>Ví dụ: git push origin --tags</p>
        <img className="image" src="images/Version/pushTag.png" alt="" />
      </div>
      <h3>6. Checkout tag</h3>
      <div className="f20">
        <p>
          Để checkout tag, ta sử dụng lệnh git checkout{" "}
          <span className="highlight">tag_name</span>
        </p>
        <p>
          Ví dụ: git checkout <span className="highlight">v1.0</span>
        </p>
        <img className="image" src="images/Version/checkoutTag.png" alt="" />
      </div>
    </div>
  );
}
