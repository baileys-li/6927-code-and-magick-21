"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const HISTOGRAM_HEIGHT = 150;
const BAR_WIDTH = 40;
const GAP = 50;

function renderStatistics(ctx, names, times) {
  renderCloudWithShadow(ctx);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;

  ctx.fillText(`Ура вы победили!`, 140, 25);
  ctx.fillText(`Список результатов:`, 140, 45);

  names.forEach((name, index) => {
    const maxTime = Math.max(...times);
    const x = 140 + index * (GAP + BAR_WIDTH);
    const barHeight = (times[index] / maxTime) * HISTOGRAM_HEIGHT;

    ctx.fillStyle = `#000`;
    ctx.fillText(Math.round(times[index]), x, 75);

    if (name === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240 ${100 * Math.random()}% 50%)`;
    }

    const startY = 90 + HISTOGRAM_HEIGHT - barHeight;

    ctx.fillRect(x, startY, BAR_WIDTH, barHeight);

    ctx.fillStyle = `#000`;
    ctx.fillText(name, x, 80 + HISTOGRAM_HEIGHT + 20);
  });
}

function renderCloudWithShadow(
    ctx,
    x = 100,
    y = 10,
    shadowOffset = 10,
    shadowColor = `rgba(0, 0, 0, 0.7)`
) {
  renderCloud(ctx, x + shadowOffset, y + shadowOffset, shadowColor);
  renderCloud(ctx, x, y);
}

function renderCloud(ctx, x, y, color = `#fff`) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}
