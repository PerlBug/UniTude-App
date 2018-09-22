import React, { Component } from 'react';
import UniDropDown from './UniDropDown';

class UniSelect extends Component {
  render() {
    return (
      <div className="fl w-90 pa2">
        <div>SELECT YOUR UNI:</div>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            <div class="fl w-100 w-50-ns pa2">
              <div class="outline bg-white pv4"></div>
                    <div><UniDropDown /></div>
            </div>
            <div class="fl w-100 w-50-ns pa2">
              <div class="outline bg-white pv4"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default UniSelect;
