import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            fontFamily: "system-ui, sans-serif",
            background: "#f1f6f4",
            color: "#52333a",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
            Something went wrong loading this page.
          </p>
          <pre
            style={{
              margin: 0,
              maxWidth: "100%",
              overflow: "auto",
              fontSize: "12px",
              textAlign: "left",
              opacity: 0.9,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {String(this.state.error?.message ?? this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
