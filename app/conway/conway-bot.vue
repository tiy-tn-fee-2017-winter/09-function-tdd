<template lang="html">
  <div class="conway">
    <div class="section">
      <div class="container">
        <h1 class="c-heading">Conway's Game of Life</h1>
        <table class="c-table">
          <tr v-for="(row, y) in grid">
            <td v-for="(cell, x) in row">
              <button class="c-btn c-btn--grid" @click="changePosition(y, x)" :class="{ 'c-btn--active': cell }"></button>
            </td>
          </tr>
        </table>

        <div class="c-btn-bar">
          <button class="c-btn" @click="step">Step</button>
          <button class="c-btn" @click="play">Play</button>
          <button class="c-btn" @click="pause">Pause</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shouldStayAlive from './should-stay-alive';
import shouldRevive from './should-revive';


export default {
  data() {
    const grid = [];
    const size = 20;

    for (let i = 0; i < size; i += 1) {
      grid.push([]);

      for (let j = 0; j < size; j += 1) {
        grid[i].push(false);
      }
    }

    return {
      grid,
    };
  },


  methods: {
    play() {
      this.timer = window.setInterval(() => {
        this.step();
      }, 256);
    },

    pause() {
      if (this.timer) {
        window.clearInterval(this.timer);
      }

      this.timer = null;
    },

    getNeighbors(grid, x, y) {
      const neighbors = [];

      for (let i = x - 1; i <= x + 1; i += 1) {
        for (let j = y - 1; j <= y + 1; j += 1) {
          if (x !== i || j !== y) {
            if (grid[i]) {
              neighbors.push(grid[i][j]);
            } else {
              neighbors.push(undefined);
            }
          }
        }
      }

      return neighbors;
    },

    step() {
      this.grid = this.grid.map((row, y) => {
        return row.map((cell, x) => {
          const neighbors = this.getNeighbors(this.grid, y, x);

          if (cell) {
            return shouldStayAlive(neighbors);
          }

          return shouldRevive(neighbors);
        });
      });
    },

    changePosition(y, x) {
      this.grid = this.grid.map((row, rowIndex) => {
        if (rowIndex === y) {
          return row.map((cell, cellIndex) => {
            if (cellIndex === x) {
              return !cell;
            }

            return cell;
          });
        }

        return row;
      });
    }
  },
};
</script>
