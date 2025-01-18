# Stale Closure in React's useEffect Cleanup

This example demonstrates a common error in React's `useEffect` hook: using a stale closure in the cleanup function.  The cleanup function should only use variables passed in as arguments.  This commit fixes the stale closure problem in a React component's `useEffect` hook cleanup function.