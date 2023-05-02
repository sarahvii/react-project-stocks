import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';

const getOptions = type => ({
  chart: {
    type,
    width: null,
    height: (9 / 16) * 50 + '%',
  },
  title: {
    text: _.startCase(`${type} chart`),
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
    {
      data: [2, 7, 0, 4, 6, 2],
    },
  ],
});

const HighChartsStock = () => {
  return (
    <div style={{ maxWidth: '80%', margin: '4rem' }}>
      <HighchartsReact highcharts={Highcharts} options={getOptions('line')} />
      <HighchartsReact highcharts={Highcharts} options={getOptions('spline')} />
      <HighchartsReact highcharts={Highcharts} options={getOptions('area')} />
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions('areaspline')}
      />
      <HighchartsReact highcharts={Highcharts} options={getOptions('column')} />
      <HighchartsReact highcharts={Highcharts} options={getOptions('bar')} />
      <HighchartsReact highcharts={Highcharts} options={getOptions('pie')} />
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions('scatter')}
      />
    </div>
  );
};

export default HighChartsStock;
