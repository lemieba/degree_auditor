import React from 'react';
import Term from './Term'
import $ from 'jquery';
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

export default class Audit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        student: "",
        advisor: "",
        terms: props.terms // term size should be limited to 8 for four years.
      }
    }
    componentDidMount() {
      $(function() {
        $(".holder").sortable({
          connectWith: '.holder'
        });
      });
    }
    render() {
      return (<div className="grid">
        {this.state.terms.map((term_courses, index) => {
          return (<Term key={index} number={index+1} courses={term_courses} />);
        })}
        </div>);
    }
}