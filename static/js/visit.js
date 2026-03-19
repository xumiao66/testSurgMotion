document.addEventListener('DOMContentLoaded', function () {
  let count = 99997;
  const counterEl = document.getElementById('flip-counter');

  // 获取数字框高度（从 CSS 变量或实际高度）
  function getDigitHeight(el) {
    return parseInt(
      getComputedStyle(el).getPropertyValue('--digit-height') ||
      getComputedStyle(el).height
    );
  }

  function createDigit(num) {
    const digitEl = document.createElement('div');
    digitEl.className = 'digit';
    const inner = document.createElement('div');
    inner.className = 'digit-inner';
    for (let i = 0; i <= 9; i++) {
      const numDiv = document.createElement('div');
      numDiv.textContent = i;
      inner.appendChild(numDiv);
    }
    const digitHeight = getDigitHeight(digitEl);
    inner.style.transform = `translateY(-${num * digitHeight}px)`;
    digitEl.appendChild(inner);
    return digitEl;
  }

  function renderCounter(num) {
    counterEl.innerHTML = '';
    String(num).split('').forEach(d => {
      counterEl.appendChild(createDigit(parseInt(d)));
    });
  }

  function updateCounter(newNum) {
    const oldStr = String(count);
    const newStr = String(newNum);

    // 位数增加
    if (newStr.length > oldStr.length) {
      // 在最左边插入一个新 digit，从 0 滚到目标
      const newDigitEl = createDigit(0);
      counterEl.insertBefore(newDigitEl, counterEl.firstChild);

      // 让新 digit 滚到目标数字
      const targetNum = parseInt(newStr[0]);
      const digitHeight = getDigitHeight(newDigitEl);
      setTimeout(() => {
        newDigitEl.querySelector('.digit-inner').style.transform =
          `translateY(-${targetNum * digitHeight}px)`;
      }, 50);

      // 更新其他位
      const restDigits = newStr.slice(1).split('');
      counterEl.childNodes.forEach((digitEl, i) => {
        if (i === 0) return; // 跳过新加的
        const inner = digitEl.querySelector('.digit-inner');
        const target = parseInt(restDigits[i - 1]);
        const digitHeight = getDigitHeight(digitEl);
        inner.style.transform = `translateY(-${target * digitHeight}px)`;
      });
    } else {
      // 位数不变，正常更新
      const newDigits = newStr.split('');
      counterEl.childNodes.forEach((digitEl, i) => {
        const inner = digitEl.querySelector('.digit-inner');
        const targetNum = parseInt(newDigits[i]);
        const digitHeight = getDigitHeight(digitEl);
        inner.style.transform = `translateY(-${targetNum * digitHeight}px)`;
      });
    }

    count = newNum;
  }

  // 初始化
  renderCounter(count);
  setInterval(() => updateCounter(count + 1), 2000);

});
