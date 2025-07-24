if (!$response?.body) {
  console.log("[Lightroom] ❌ No response body found.");
  $done({});
} else {
  console.log("[Lightroom] ✅ Response body found. Logging...");
  console.log("=== Lightroom Raw Body Start ===");
  console.log($response.body);
  console.log("=== Lightroom Raw Body End ===");
  $done({});
}
