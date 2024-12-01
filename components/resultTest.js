app.component('typing-test-result', {
  template: `
      <div class="result">
          <div class="right-sec">
              <div class="wpm-score-sec">
                  <h2>wpm</h2>
                  <h3>{{this.score * 2}}</h3>
              </div>

              <div class="timing-sec">
                  <h2>time</h2>
                  <h3>30s</h3>
              </div>
          </div>
              
          <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
      </div>
  `,
  props: ['score', 'scorelist'],
  data() {
      return {}
  },
  methods: {
      // Methods Here
      scoreEachSecond(correctWord, second) {
          var result = (60 * correctWord) / second;
          return result;
      }
  },
  updated() {
      // After the scorelist updated to the actual score => creating chart

      var that = this;

      var xValues = this.scorelist[0];
      var yValues = this.scorelist[1];

      console.log(yValues);

      new Chart("myChart", {
          type: "bar",
          data: {
              labels: xValues,
              datasets: [{
                  data: yValues,
                  backgroundColor: "#ff79c6",  // Pink color for the chart bars
                  borderColor: "#ff79c6",      // Border color to match
                  borderWidth: 1
              }]
          },
          options: {
              legend: { display: false },
              title: {
                  display: true,
                  text: "WPM Score",
                  fontSize: 20,
                  fontColor: "#f8f8f2"  // Light text for title
              },
              scales: {
                  y: {
                      ticks: {
                          color: "#f8f8f2",  // Light ticks on the y-axis
                      },
                      grid: {
                          color: "#44475a",  // Dark grid lines
                      }
                  },
                  x: {
                      ticks: {
                          color: "#f8f8f2",  // Light ticks on the x-axis
                      },
                      grid: {
                          color: "#44475a",  // Dark grid lines
                      }
                  }
              }
          }
      });
  }
});
