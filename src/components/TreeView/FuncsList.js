/*
Copyright 2017 Bitnami.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// @flow
import React, { Component } from 'react'
import type { Func } from 'utils/Types'
import FontIcon from 'material-ui/FontIcon'
import './TreeView.scss'

export default class FuncsList extends Component {

  props: {
    funcs: Array<Func>,
    selectedFunc?: Func,
    onSelect: (?Func) => void
  }

  render() {
    return (
      <div className='funcs padding-h-big'>
        <h4 className='funcsTitle margin-t-tiny'>Functions</h4>
        {this.props.funcs.map(func => this.renderFunc(func))}
      </div>
    )
  }

  renderFunc(func: Func) {
    const { selectedFunc, onSelect } = this.props
    const isActive = selectedFunc && func.metadata.uid === selectedFunc.metadata.uid
    return (
      <div
        key={func.metadata.uid}
        onClick={() => onSelect(func)}
        className={`func type-big ${isActive ? 'active' : ''}`}
      >
        <FontIcon className='fa fa-file-code-o margin-r-small' />
        {func.metadata.name}
      </div>
    )
  }

}
