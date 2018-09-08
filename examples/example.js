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
    a.on('click', (e) => {
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
}

function showPng(png) {
  $('#png').html(`<img src="${png}"/>`)
}

function showSvg(svg) {
  $('#svg').html(`<img src="${svg}"/>`)
}
