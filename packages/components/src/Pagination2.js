import React, {Component} from 'react';

export default class Pagination extends Component {
  generateButtons() {
    const {visiblePages, totalPages, currentPage, goTo} = this.props;

    let startPosition, endPosition;

    //calculate how may partitions we got
    let partition = parseInt(currentPage / visiblePages) + 1;
    let buttons = [];

    if (currentPage % visiblePages == 0) {
      startPosition = currentPage - visiblePages + 1;
      endPosition = currentPage;
    } else {
      //the index that the first page has
      startPosition = (partition - 1) * visiblePages + 1;
      endPosition = partition * visiblePages;
    }

    let btnClass;
    for (let i = startPosition; i <= endPosition; i++) {
      if (i > totalPages) {
        break;
      }
      btnClass = 'button';
      if (i == currentPage) {
        btnClass = 'active primary button';
      }
      buttons.push(<button key={`pagination-btn-${i}`} className={btnClass}
                           onClick={goTo.bind(this, i)}>{i}</button>);
    }

    return buttons;
  }

  render() {
    const {totalPages, goTo, goPrevious, goNext} = this.props;
    if (totalPages <= 0) {
      return '';
    }
    let buttons = this.generateButtons();

    return (
        <div className="pagination">
          <div className="button-group clear-border">
            <button className="button"
                    onClick={goTo.bind(this, 1)}>|&lt;</button>
            <button className="button"
                    onClick={goPrevious.bind(this)}>&lt;</button>
            {buttons}
            <button className="button" onClick={goNext.bind(this)}>&gt;</button>
            <button className="button"
                    onClick={goTo.bind(this, totalPages)}>&gt;|
            </button>
          </div>
        </div>
    );
  }

}

/*Pagination.propTypes = {
    visiblePages: PropTypes.number,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    goTo: PropTypes.func,
    goPrevious: PropTypes.func,
    goNext: PropTypes.func
};*/

Pagination.defaultProps = {
  visiblePages: 5,
};