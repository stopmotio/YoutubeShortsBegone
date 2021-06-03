function FixTheLink() {
  var workvar = document.getElementById('sourceurl').value;
  workvar = workvar.replace('shorts/', 'watch?v=');
  workvar = workvar.replace('?feature=share', ''); //Clean up final URL. If copied link from SHARE button will add this extra data

  //Now all we have to do is output this
  console.log('Parsing completed with a final URL of: ' + workvar);
  document.getElementById('output').href = workvar;
  document.getElementById('output').innerHTML = workvar;

  //and somehow this is still majority HTML according to GitHub/Linguist. Thanks!
}
