```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; // Add a mounted flag
    const cleanup = () => {
      // Use mounted flag to prevent unnecessary console log after unmount
      if (mounted) {
          console.log('Cleanup: count =', count);
      }
      mounted = false; // Set mounted to false after cleanup
    };

    return cleanup;
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```