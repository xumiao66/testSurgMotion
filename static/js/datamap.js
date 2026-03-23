// document.addEventListener("DOMContentLoaded", function() {
//   renderOrganGrid();
// });

// function renderOrganGrid() {
//   const container = document.getElementById("organ-grid");
//   if (!container) return;

//   // 图片基础路径
//   const basePath = "./static/image/organs/"; 

//   // 定义数据 (严格按照 4列 x 3行 = 12个)
//   // 文件名根据提供的 ls 列表匹配
//   const organData = [
//     // --- Row 1 ---
//     { 
//       label: "Brain", 
//       img: "brain.png", 
//       datasets: "PitVis, Private", 
//       videos: "2,303", 
//       hours: "2,860" 
//     },
//     { 
//       label: "Ophthalmic", 
//       img: "eye.png", 
//       datasets: "OphNet, CATARACTS", 
//       videos: "1,969", 
//       hours: "230" 
//     },
//     { 
//       label: "Hand Skill", 
//       img: "spleen.png", // 暂用 Spleen 替代 Hand
//       datasets: "Alxsuture, JIGSAWS", 
//       videos: "206", 
//       hours: "5.3" 
//     },
//     { 
//       label: "General Surg.", 
//       img: "gut.png",    // 用 Gut 替代 General
//       datasets: "Youtube", 
//       videos: "10,874", 
//       hours: "125" 
//     },
    
//     // --- Row 2 ---
//     { 
//       label: "Bronchi", 
//       img: "bronchi.png", 
//       datasets: "SYSU-100", 
//       videos: "--", 
//       hours: "--" 
//     },
//     { 
//       label: "Breast", 
//       img: "breast.png", 
//       datasets: "Egosurgery", 
//       videos: "21", 
//       hours: "10.6" 
//     },
//     { 
//       label: "Stomach", 
//       img: "stomach.png", 
//       datasets: "Multibypass", 
//       videos: "180", 
//       hours: "252" 
//     },
//     { 
//       label: "Liver", 
//       img: "liver.png", 
//       datasets: "PmLR50", 
//       videos: "50", 
//       hours: "7.0" 
//     },
    
//     // --- Row 3 ---
//     { 
//       label: "Gallbladder", 
//       img: "gallbladder.png", 
//       datasets: "Cholec80", 
//       videos: "80", 
//       hours: "51.3" 
//     },
//     { 
//       label: "Kidney", 
//       img: "kidneys.png", // 注意文件名是复数 kidneys.png
//       datasets: "M2CAI16", 
//       videos: "41", 
//       hours: "26.3" 
//     },
//     { 
//       label: "Colon", 
//       img: "intestine.png", // Colon 使用 intestine.png
//       datasets: "EndoFM", 
//       videos: "30k", 
//       hours: "45" 
//     },
//     { 
//       label: "Uterus", 
//       img: "uterus.png", 
//       datasets: "AutoLaparo", 
//       videos: "25", 
//       hours: "23.1" 
//     }
//   ];

//   let htmlContent = "";

//   organData.forEach(item => {
//     // is-3-desktop 保证每行4个 (12/3 = 4)
//     // is-6-tablet 保证平板每行2个
//     htmlContent += `
//       <div class="column is-3-desktop is-6-tablet is-12-mobile organ-col">
//         <div class="organ-card">
          
//           <div class="organ-main">
//             <img src="${basePath}${item.img}" alt="${item.label}" class="organ-icon">
//             <p class="organ-title">${item.label}</p>
//           </div>

//           <div class="organ-details">
            
//             <div class="detail-row">
//               <span><i class="fas fa-database"></i> Source</span>
//               <span class="detail-val" style="font-size: 0.85em;">${item.datasets}</span>
//             </div>
            
//             <div class="detail-row">
//               <span><i class="fas fa-film"></i> Videos</span>
//               <span class="detail-val">${item.videos}</span>
//             </div>
            
//             <div class="detail-row">
//               <span><i class="far fa-clock"></i> Duration</span>
//               <span class="detail-val">${item.hours} h</span>
//             </div>

//           </div>

//         </div>
//       </div>
//     `;
//   });

//   container.innerHTML = htmlContent;
// }


document.addEventListener("DOMContentLoaded", function() {
  renderOrganGrid();
});

function renderOrganGrid() {
  const container = document.getElementById("organ-grid");
  if (!container) return;

  // 1. 修改图片基础路径
  const basePath = "./organs/"; 

  // 2. 定义数据 (4列 x 3行 = 12个)
  const organData = [
    // Row 1
    { label: "Brain",         img: "brain.png",       datasets: "PitVis, Private",    videos: "2,303",  hours: "2,860" },
    { label: "Ophthalmic",    img: "eye.png",         datasets: "OphNet, CATARACTS",  videos: "1,969",  hours: "230" },
    { label: "Bronchi",       img: "bronchi.png",     datasets: "SYSU-100",           videos: "--",     hours: "--" },
    { label: "Breast",        img: "breast.png",      datasets: "Egosurgery",         videos: "21",     hours: "10.6" },
    
    // Row 2
    { label: "Stomach",       img: "tummy.png",     datasets: "Multibypass",        videos: "180",    hours: "252" },
    { label: "Liver",         img: "liver.png",       datasets: "PmLR50",             videos: "50",     hours: "7.0" },
    { label: "Gallbladder",   img: "gallbladder_2.png", datasets: "Cholec80",           videos: "80",     hours: "51.3" },
    { label: "Kidney",        img: "kidneys.png",     datasets: "M2CAI16",            videos: "41",     hours: "26.3" },
    
    // Row 3
    { label: "Colon",         img: "intestine.png",   datasets: "EndoFM",             videos: "30k",    hours: "45" }, 
    { label: "Uterus",        img: "uterus.png",      datasets: "AutoLaparo",         videos: "25",     hours: "23.1" },
    { label: "Prostate",        img: "prostate_2.png",      datasets: "Psi-AVA",         videos: "8",     hours: "20.45" },
    { label: "skill training",    img: "skill_training.png",      datasets: "Alxsuture, JIGSAWS, Youtube", videos: "11,034",    hours: "127.3" }, 
  ];

  let htmlContent = "";

  organData.forEach(item => {
    // is-3 代表占据父容器宽度的 25% (即一行4个)
    htmlContent += `
      <div class="column is-3 is-6-mobile" style="padding: 5px;">
        <div class="organ-card" style="height: 140px;">
          
          <div class="organ-main">
            <img src="${basePath}${item.img}" alt="${item.label}" class="organ-icon" style="height: 48px; margin-bottom: 8px;">
            <p class="organ-title" style="font-size: 0.9rem;">${item.label}</p>
          </div>

          <div class="organ-details" style="padding: 10px;">
            <div class="detail-row" style="font-size: 0.7rem; margin-bottom: 4px;">
              <span><i class="fas fa-database"></i> Src</span>
              <span class="detail-val">${item.datasets.split(',')[0]}</span>
            </div>
            <div class="detail-row" style="font-size: 0.7rem; margin-bottom: 4px;">
              <span><i class="fas fa-film"></i> Vid</span>
              <span class="detail-val">${item.videos}</span>
            </div>
            <div class="detail-row" style="font-size: 0.7rem;">
              <span><i class="far fa-clock"></i> Hr</span>
              <span class="detail-val">${item.hours}</span>
            </div>
          </div>

        </div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
}
