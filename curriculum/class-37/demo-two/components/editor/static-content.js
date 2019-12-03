import React from 'react';
import { SettingsContext } from '../settings/site-context.js'


class Content extends React.Component {
  static contextType = SettingsContext;

handleSubmit = (e) => {
  e.preventDefault();
}

  render() {
    return (
      <>
      <button onCLick={() => this.context.toggleDisplayMode}>Change Display Mode</button>
       <section className={`${this.context.displayMode}`}>
        <div>
          // this comes from context type via react magic
          <h1>{this.context.title</h1>
          <div>
            <a href={`http://twitter.com/${this.context.twitter}`}>
            @{this.context.twitter}
          </div>
          <div>
            <a href={`mailto:${this.context.email}`}>
              {this.context.email}
            </a>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h2>Site Settings</h2>
          <label htmlFor="">
            <span>Site Title</span>
            <input placeholder="Site Title" name="title" onChange={(e) => this.context.changeTitleTo(e.target.value)} />
          </label>
          <label htmlFor="">
            <span>Twitter Handle</span>
            <input placeholder="Twitter" name="twitter" onChange={(e) => this.context.changeTwitterTo(e.target.value)} />
          </label>
          <label htmlFor="">
            <span>Email</span>
            <input placeholder="Email" name="email" onChange={(e) => this.context.changeEmailTo(e.target.value)} />
          </label>
        </form>
      </section>
      </>
    )
  }
}