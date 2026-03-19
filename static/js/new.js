// --- 模态框逻辑 (Modal Logic) ---

// 打开模态框
function openCustomModal(element) {
  var modal = document.getElementById("customModal");
  var modalImg = document.getElementById("modalFullImage");
  
  if (modal && modalImg) {
    modal.style.display = "flex"; // Set to flex to center content
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modalImg.src = element.src;   // Set image source
  } else {
    console.error("Modal elements not found! Make sure 'customModal' and 'modalFullImage' exist in HTML.");
  }
}

// 关闭模态框
function closeCustomModal() {
  var modal = document.getElementById("customModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// 监听 ESC 键退出
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeCustomModal();
  }
});
