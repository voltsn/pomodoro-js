function timer(min) {
  this._start = Date.now();
  this._end = this._start + min;
  this._seconds = 0;

  const begin = () => {
    setInterval(update.bind(this),1000);
  }

  function update(){
    this._seconds++;
    console.log(this._seconds);
  }

  function minutes(){
    return Math.floor(this._seconds / 60);
  }

  return {begin, update, minutes};
}

module.exports = {timer};
