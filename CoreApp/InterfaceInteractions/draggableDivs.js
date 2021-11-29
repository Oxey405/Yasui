// target elements with the "draggable" class
interact('.draggable')
.draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: document.querySelector('#editor'),
      endOnly: true,
    })
  ],
  autoScroll: true,

  listeners: {
    move (event) {
      const x = (parseFloat(event.target.dataset.x) || 0) + event.dx
      const y = (parseFloat(event.target.dataset.y) || 0) + event.dy

      event.target.style.transform =
        `translate(${x}px, ${y}px)`
      Object.assign(event.target.dataset, { x, y })
    },
  }
})