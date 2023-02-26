import React from "react";

export default function GitTag() {
  /*
  write html css for
   Tag là chức năng đặt tên một cách đơn giản của Git, nó cho phép ta xác định một cách rõ ràng các phiên bản mã nguồn (code) của dự án. Ta có thể coi tag như một branch không thay đổi được. Một khi nó được tạo (gắn với 1 commit cụ thể) thì ta không thể thay đổi lịch sử commit ấy được nữa.
Có 2 loại tag là annotated và lightweight
  */

  return (
    <div>
      <h1>Git Tag</h1>
      <p>
        Tag là chức năng đặt tên một cách đơn giản của Git, nó cho phép ta xác
        định một cách rõ ràng các phiên bản mã nguồn (code) của dự án. Ta có thể
        coi tag như một branch không thay đổi được. Một khi nó được tạo (gắn với
        1 commit cụ thể) thì ta không thể thay đổi lịch sử commit ấy được nữa.
        Có 2 loại tag là annotated và lightweight
      </p>
      <h2>1. Tạo tag</h2>
      <p>
        Để tạo tag, ta sử dụng lệnh git tag{" "}
        <span className="highlight">tag_name</span>
      </p>
      <p>
        Ví dụ: git tag <span className="highlight">v1.0</span>
      </p>
      <p>
        Để tạo tag với thông tin mô tả, ta sử dụng lệnh git tag -a{" "}
        <span className="highlight">tag_name</span> -m{" "}
        <span className="highlight">"message"</span>
      </p>
      <p>
        Ví dụ: git tag -a <span className="highlight">v1.0</span> -m{" "}
        <span className="highlight">"version 1.0"</span>
      </p>
      <p>
        Để tạo tag trên một commit cụ thể, ta sử dụng lệnh git tag -a{" "}
        <span className="highlight">tag_name</span> -m{" "}
        <span className="highlight">"message"</span>{" "}
        <span className="highlight">commit_id</span>
      </p>
      <p>
        Ví dụ: git tag -a <span className="highlight">v1.0</span> -m{" "}
        <span className="highlight">"version 1.0"</span>{" "}
        <span className="highlight">b1e4d</span>
      </p>
      <h2>2. Xem danh sách tag</h2>
      <p>Để xem danh sách tag, ta sử dụng lệnh git tag</p>
      <p>Ví dụ: git tag</p>
      <h2>3. Xem thông tin tag</h2>
      <p>
        Để xem thông tin tag, ta sử dụng lệnh git show{" "}
        <span className="highlight">tag_name</span>
      </p>
      <p>
        Ví dụ: git show <span className="highlight">v1.0</span>
      </p>
      <h2>4. Xóa tag</h2>
      <p>
        Để xóa tag, ta sử dụng lệnh git tag -d{" "}
        <span className="highlight">tag_name</span>
      </p>
      <p>
        Ví dụ: git tag -d <span className="highlight">v1.0</span>
      </p>
      <h2>5. Push tag lên remote</h2>
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
      <h2>6. Checkout tag</h2>
      <p>
        Để checkout tag, ta sử dụng lệnh git checkout{" "}
        <span className="highlight">tag_name</span>
      </p>
      <p>
        Ví dụ: git checkout <span className="highlight">v1.0</span>
      </p>
      <h2>7. Tạo tag trên Github</h2>

      <p>
        Để tạo tag trên Github, ta vào trang Github của dự án, chọn tab{" "}
        <span className="highlight">Code</span>, chọn tab{" "}
        <span className="highlight">Tags</span>, chọn nút{" "}
        <span className="highlight">Create new tag</span>, điền thông tin tag
        cần tạo, chọn nút <span className="highlight">Publish tag</span>
      </p>
      <img src="https://i.imgur.com/8Z7ZQ9M.png" alt="create tag" />
      <h2>8. Checkout tag trên Github</h2>
      <p>
        Để checkout tag trên Github, ta vào trang Github của dự án, chọn tab{" "}
        <span className="highlight">Code</span>, chọn tab{" "}
        <span className="highlight">Tags</span>, chọn tag cần checkout, chọn nút{" "}
        <span className="highlight">Code</span>, chọn nút{" "}
        <span className="highlight">Download ZIP</span>
      </p>
      <img src="https://i.imgur.com/8Z7ZQ9M.png" alt="create tag" />
    </div>
  );
}
