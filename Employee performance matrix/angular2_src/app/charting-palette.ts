export const vdlChartingPalette = {
  colors: ["#0e5061", "#1a8099", "#db9500", "#d14019",'#8B008B',"#925172",'#DDDF0D', '#7798BF', '#55BF3B', '#DF5353', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    plotBorderWidth: null,
    plotShadow: false
  },
  title: {
    style: {
      align: 'left',
      x: 70,
      color: '#000000',//#6a6a6a',
      font: '16px ProximaNova, sans-serif',
      // display: 'none'
    }
  },
  subtitle: {
    style: {
      color: '#000000',
      font: '12px ProximaNova, sans-serif'
    }
  },
  credits: {
    enabled: false
  },
  size: {},
  xAxis: {
    gridLineWidth: 1,
    lineColor: '#C0D0E0',
    tickColor: '#C0D0E0',
    labels: {
      style: {
        color: '#000000',
        font: '14px ProximaNova, sans-serif'
      }
    },
    title: {
      style: {
        color: '#000000',
        font: '12px ProximaNova, sans-serif'
      }
    }
  },
  yAxis: {
    lineColor: '#C0D0E0',
    tickColor: '#C0D0E0',
    tickWidth: 1,
    labels: {
      style: {
        color: '#000000',
        font: '14px ProximaNova, sans-serif'
      }
    },
    title: {
      style: {
        color: '#000000',
        font: '12px ProximaNova, sans-serif'
      }
    }
  },
  legend: {
    align: 'left',
    x: 20,
    itemStyle: {
      font: '12px ProximaNova, sans-serif',
      fontWeight: '300',
      color: '#000000'
    },
    itemHoverStyle: {
      color: 'black'
    },
    itemHiddenStyle: {
      color: 'silver'
    }
  },
  labels: {
    style: {
      color: '#000000'
    }
  },
  exporting: {
    enabled: false
  }
};
