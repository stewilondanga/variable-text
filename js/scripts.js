var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

class ChangingTitle {
  constructor(x=null) {
    this.node = x;

		this.letterfy(this.node.querySelector('h1'));
		  }
		  letterfy(node) {
		    let text = node.innerText;
		    node.innerText = '';

				node.classList.add('current');
				    for (let c in text) {
				      let span = document.createElement('span');
				      span.innerText = text[c];

							span.classList.add('letter', 'in');

							
