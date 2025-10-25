import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() { return { hasError: true }; }

  componentDidCatch(error, info) { console.error("ErrorBoundary caught:", error, info); }

  render() {
    if (this.state.hasError) return <p className="text-center text-red-600 mt-10">Something went wrong.</p>;
    return this.props.children;
  }
}
