document.addEventListener("DOMContentLoaded", function () {
  const reportText = `The liver demonstrates a full contour with a smooth capsule.
Parenchymal echogenicity is finely increased but heterogeneous.
The portal venous system is suboptimally visualized.
Hepatorenal echogenic contrast is accentuated.
No intrahepatic or extrahepatic bile duct dilatation is observed.
The diameter of the main portal vein is within normal limits.
The gallbladder is of normal size and shape, with a thin and smooth wall.
No significant abnormal intraluminal echoes are detected.
The pancreas is normal in size and shape, with homogeneous parenchymal echogenicity.
The pancreatic duct is not dilated, and no definite space-occupying lesions are identified.
The spleen is normal in size and shape, with homogeneous parenchymal echogenicity.
No obvious space-occupying lesions are seen within the spleen.`;

  const triggers = document.querySelectorAll(".report-trigger");
  const reportBox = document.getElementById("report-box");

  let typingInterval = null;
  let isTyping = false;

  function typeReportVertically(text, target, speed = 30) {
    if (isTyping) {
      clearInterval(typingInterval);
      isTyping = false;
    }

    if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = null;
    }

    target.innerHTML = "";
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = document.createElement("p");
    target.appendChild(currentLine);
    isTyping = true;

    typingInterval = setInterval(() => {
      currentLine.textContent += lines[lineIndex][charIndex];
      charIndex++;

      if (charIndex >= lines[lineIndex].length) {
        lineIndex++;
        charIndex = 0;
        if (lineIndex >= lines.length) {
          clearInterval(typingInterval);
          isTyping = false;
          return;
        }
        currentLine = document.createElement("p");
        target.appendChild(currentLine);
      }
    }, speed);
  }

  triggers.forEach(img => {
    img.addEventListener("click", () => {
      typeReportVertically(reportText, reportBox);
    });
  });
    // 新增：按钮触发逻辑
  const generateBtn = document.querySelector(".generate-report-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      typeReportVertically(reportText, reportBox);
    });
  }
});
