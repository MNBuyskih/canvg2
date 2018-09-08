$(() => {
  $.ajax('./resources.json', {
    complete: a => run(JSON.parse(a.responseText))
  })
});

function run(resources) {
  const examples = $("#examples");

  for (let i in resources) {
    const resource = resources[i];
    const a = $(`<a href="${resource.svg}" data-png="${resource.png}">${resource.file}</a>`);
    a.appendTo($('<li>').appendTo(examples));
    a.on('click', (e) => {
      e.preventDefault();
      showExample(e.target);
    })
  }

  const $filter = $('#filter');
  $filter.on('keyup', () => {
    console.log($filter.val());
    examples.find('li').each((n, li) => {
      const $li = $(li);
      console.log($li.text().indexOf($filter.val()) >= 0);
      $li.toggleClass('d-none', $li.text().indexOf($filter.val()) < 0)
    });
  });
}

function showExample(a) {
  const $a = $(a);
  const svg = $a.attr('href');
  const png = $a.data('png');

  showPng(png);
  showSvg(svg);
}

function showPng(png) {
  $('#png').html(`<img src="${png}"/>`)
}

function showSvg(svg) {
  $('#svg').html(`<img src="${svg}"/>`)
}
