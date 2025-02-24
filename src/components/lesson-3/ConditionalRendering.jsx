import { Component } from "react";

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        };
    }

    handler = () => {
        this.setState((prevState) => ({ isExpand: !prevState.isExpand }));
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {/* Header màu xanh */}
                <div style={{ backgroundColor: "green", color: "white", padding: "15px" }}>
                    <h1>Conditional Rendering</h1>
                </div>

                {/* Nút toggle */}
                <div style={{ marginTop: "20px" }}>
                    <button onClick={this.handler}>
                        {this.state.isExpand ? "Đóng giới thiệu" : "Mở giới thiệu"}
                    </button>
                </div>

                {/* Nội dung hiển thị có điều kiện */}
                {this.state.isExpand && (
                    <div style={{ marginTop: "15px", textAlign: "left", padding: "0 20px" }}>
                        <h2>Giới thiệu về ReactJS</h2>
                        <p>
                            ReactJS là một thư viện JavaScript phổ biến do Facebook phát triển, dùng để xây dựng giao diện người dùng (UI) hiệu quả và linh hoạt. Ra mắt vào năm 2013, React nhanh chóng trở thành một trong những công nghệ được sử dụng rộng rãi nhất trong lĩnh vực phát triển web nhờ tính đơn giản, hiệu suất cao và khả năng tái sử dụng code.

                            React hoạt động dựa trên Component-Based Architecture (kiến trúc dựa trên thành phần), cho phép chia nhỏ giao diện thành các thành phần nhỏ, có thể tái sử dụng. Điều này giúp việc phát triển ứng dụng trở nên dễ bảo trì hơn và tăng hiệu suất làm việc.

                            Một trong những tính năng quan trọng của React là Virtual DOM – giúp cập nhật giao diện nhanh hơn bằng cách chỉ thay đổi những phần tử cần thiết thay vì render lại toàn bộ trang. Điều này cải thiện đáng kể hiệu suất của ứng dụng web.

                            React sử dụng JSX (JavaScript XML), một cú pháp mở rộng của JavaScript, giúp viết code dễ đọc hơn bằng cách kết hợp cả HTML và JavaScript trong cùng một file.

                            Ngoài ra, React hỗ trợ React Hooks, một tính năng giúp quản lý state và các side effects trong functional components mà không cần dùng class. Hooks như useState, useEffect giúp code ngắn gọn, dễ hiểu hơn.

                            React thường được sử dụng cùng với các thư viện như React Router (để quản lý điều hướng), Redux (quản lý state) và Tailwind CSS (tạo giao diện đẹp mắt). Bên cạnh đó, React còn có thể kết hợp với React Native để phát triển ứng dụng mobile.

                            Với cộng đồng lớn mạnh, ReactJS là một lựa chọn hàng đầu cho các lập trình viên khi xây dựng ứng dụng web hiện đại.
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
