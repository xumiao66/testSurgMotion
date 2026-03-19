document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有对比组件
  const pancreasSlider = new juxtapose.JXSlider('#pancreas-compare', [
    { src: './img2/arterial-venous_vessel/a.png', label: 'raw', credit: '' },
    { src: './img2/arterial-venous_vessel/b.png', label: 'seg', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const liverSlider = new juxtapose.JXSlider('#liver-compare', [
    { src: './img2/thyroid_node/a.png', label: 'raw', credit: '' },
    { src: './img2/thyroid_node/b.png', label: 'seg', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const colonSlider = new juxtapose.JXSlider('#colon-compare', [
    { src: './img2/abdomen/a.png', label: 'raw', credit: '' },
    { src: './img2/abdomen/b.png', label: 'seg', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const ASlider = new juxtapose.JXSlider('#A-compare', [
    { src: 'img2/enhance/thya.png', label: 'raw', credit: '' },
    { src: 'img2/enhance/thyb.png', label: 'enhanced', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const BSlider = new juxtapose.JXSlider('#B-compare', [
    { src: 'img2/enhance/kida.png', label: 'raw', credit: '' },
    { src: 'img2/enhance/kidb.png', label: 'enhanced', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const CSlider = new juxtapose.JXSlider('#C-compare', [
    { src: 'img2/enhance/liva.png', label: 'raw', credit: '' },
    { src: 'img2/enhance/livb.png', label: 'enhanced', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const DSlider = new juxtapose.JXSlider('#D-compare', [
    { src: 'img2/enhance/bra.png', label: 'raw', credit: '' },
    { src: 'img2/enhance/brb.png', label: 'enhanced', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  const ESlider = new juxtapose.JXSlider('#E-compare', [
    { src: 'img2/enhance/ara.png', label: 'raw', credit: '' },
    { src: 'img2/enhance/arb.png', label: 'enhanced', credit: '' }
  ], { animate: true, showLabels: true, startingPosition: '25%' });

  console.log('所有对比组件初始化完成');
});
