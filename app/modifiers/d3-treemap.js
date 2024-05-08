import { modifier } from 'ember-modifier';
import d3 from 'd3';

export default modifier(function d3Treemap(element, positional, { data }) {
  console.log(data);
  drawTreeMap(element, data);
});

function drawTreeMap(element, dataset) {
  console.log(dataset);
  const hierarchy = d3
    .hierarchy(dataset)
    .sum((d) => d.value) //sums every child values
    .sort((a, b) => b.value - a.value); // and sort them in descending order
  const treemap = d3
    .treemap()
    .size([element.clientWidth, element.clientHeight])
    .padding(1);
  const root = treemap(hierarchy);

  const categories = dataset.children.map((d) => d.name),
    colors = [
      '#1C1832',
      '#9E999D',
      '#F2259C',
      '#347EB4',
      '#08ACB6',
      '#91BB91',
      '#BCD32F',
      '#75EDB8',
      '#89EE4B',
      '#AD4FE8',
      '#D5AB61',
      '#BC3B3A',
      '#F6A1F9',
      '#87ABBB',
      '#412433',
      '#56B870',
      '#FDAB41',
      '#64624F',
    ],
    colorScale = d3
      .scaleOrdinal() // the scale function
      .domain(categories) // the data
      .range(colors); // the way the data should be shown

  const svg = d3.select(element); //make sure there's a svg element in your html file

  svg
    .selectAll('rect')
    .data(root.leaves())
    .enter()
    .append('rect')
    .attr('x', (d) => d.x0)
    .attr('y', (d) => d.y0)
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0)
    .attr('fill', (d) => colorScale(d.data.category));

  svg
    .selectAll('text')
    .data(root.leaves())
    .enter()
    .append('text')
    .attr('x', function (d) {
      return d.x0 + 10;
    }) // +10 to adjust position (more right)
    .attr('y', function (d) {
      return d.y0 + 20;
    }) // +20 to adjust position (lower)
    .text(function (d) {
      return d.data.name;
    })
    .attr('font-size', '15px')
    .attr('fill', 'white');
}
