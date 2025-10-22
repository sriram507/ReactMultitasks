import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => this.setState({ hasError: false });

  render() {
    return this.state.hasError ? (
      <div className="text-center p-6">
        <h2 className="text-red-600 font-bold mb-2">
          Oops! Something went wrong.
        </h2>
        <button
          onClick={this.handleRetry}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Retry
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}
