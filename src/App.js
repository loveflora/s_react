import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "white",
        width: "560px",
        height: "800px",
        borderRadius: "8px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <div style={{ padding: "56px 36px", textAlign: "left" }}>
          <h1
            style={{ fontSize: "40px", color: "#2e2e2e", marginBottom: "32px" }}
          >
            2023년 2월 5일
          </h1>
        </div>
        {/*  */}
        <div>
          <input
            style={{
              border: "none",
              borderBottom: "1px solid #cfcfcf",
              width: "100%",
            }}
          />
          <button>추가</button>
        </div>

        <div>
          <ul></ul>

          {/* 버튼 2개, state관리, 변수 설정 해보기, click 시 */}
        </div>
      </div>
    </div>
  );
}

export default App;
