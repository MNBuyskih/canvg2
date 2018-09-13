$(() => {
  $.ajax('./resources.json', {
    complete: a => run(JSON.parse(a.responseText))
  })
});

function run(resources) {
  const examples = $("#examples");

  for (let i in resources) {
    const resource = resources[i];
    const a = $(`<a href="#${resource.file}" data-svg="${resource.svg}" data-png="${resource.png}">${resource.file}</a>`);
    a.appendTo($('<li>').appendTo(examples));
    a.on('click', (e) => showExample(e.target))
  }

  const $filter = $('#filter');
  $filter.on('keyup', () => {
    examples.find('li').each((n, li) => {
      const $li = $(li);
      $li.toggleClass('d-none', $li.text().indexOf($filter.val()) < 0)
    });
  });

  const hash = document.location.hash;
  const a = examples.find(`a[href="${hash}"]`);
  if (a.length) {
    showExample(a);
  } else {
    showExample(examples.find('a').first());
  }
}

function showExample(a) {
  const $a = $(a);
  const svg = $a.data('svg');
  const png = $a.data('png');

  showPng(png);
  showSvg(svg);

  $.ajax(svg, {
    complete: (e) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(e.responseText, 'text/xml');
      const canvg = new CanVG2($('#canvas').get(0), xml.childNodes[0]);
      canvg.draw();
    }
  });
}

function showPng(png) {
  $('#png').html(`<img src="${png}"/>`)
}

function showSvg(svg) {
  $('#svg').html(`<img src="${svg}"/>`)
}
