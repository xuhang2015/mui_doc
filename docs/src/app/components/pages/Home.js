import React, {Component, PropTypes} from 'react';
import HomeFeature from './HomeFeature';
import FullWidthSection from '../FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';

class HomePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  homePageHero() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 130,
        width: 420,
        height: 157,
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      demoStyle: {
        margin: '16px 32px 0px 32px',
      },
      h1: {
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 32,
      },
      h1WhenLarge: {
        fontSize: 56,
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
    };

    styles.h2 = Object.assign({}, styles.h1, styles.h2);

    if (this.props.width === LARGE) {
      styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
      styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
      styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
    }

      return (
      <FullWidthSection style={styles.root}>
        <img style={styles.svgLogo} src="images/material-ui-logo.svg" />
        <div style={styles.tagline}>
          <h1 style={styles.h1}>Material-UI</h1>
          <h2 style={styles.h2}>
            一个采用 <span style={styles.nowrap}>Material Design</span>风格的<a href="https://facebook.github.io/react/">React</a>组件。
          </h2>
          <RaisedButton
            className="demo-button"
            label="开始"
            onTouchTap={this.handleTouchTapDemo}
            style={styles.demoStyle}
            labelStyle={styles.label}
          />

        </div>

      </FullWidthSection>
    );
  }

  homePurpose() {
    const styles = {
      root: {
        backgroundColor: grey200,
      },
      content: {
        maxWidth: 700,
        padding: 0,
        margin: '0 auto',
        fontWeight: typography.fontWeightLight,
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
        color: typography.textDarkBlack,
      },
    };

    return (
      <FullWidthSection
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >
        Material UI 是 <a href="https://www.call-em-all.com/">Call-Em-All</a> 团队开发的React组件，本平台与Call-Em-All没有任何关系，
        仅仅是热爱Material UI，希望能为Material UI在国内推广尽点微薄之力。英文好的同学可以直接访问<a href="http://www.material-ui.com/">Material UI</a> :
        <a href="http://www.material-ui.com/">http://www.material-ui.com/</a>
      </FullWidthSection>
    );
  }

  homeFeatures() {
    const styles = {maxWidth: 906};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="开始"
          route="/get-started"
          img="images/get-started.svg"
          firstChild={true}
        />
        <HomeFeature
          heading="Blog"
          route="/customization"
          img="images/css-framework.svg"
        />
        <HomeFeature
          heading="论坛"
          route="/components"
          img="images/components.svg"
          lastChild={true}
        />
      </FullWidthSection>
    );
  }

  homeContribute() {
    const styles = {
      root: {
        backgroundColor: grey200,
        textAlign: 'center',
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };


    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
            如果想要加入到这个项目，可以check out <span style={styles.nowrap}>github 库</span>
        </h3>
          <RaisedButton
              label="GitHub"
              primary={true}
              href="https://github.com/callemall/material-ui"
              style={styles.button}
          />
      </FullWidthSection>
    );
  }

    handleTouchTapDemo = () => {
        this.context.router.push('/components');
    };
  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.homePageHero()}
        {this.homePurpose()}
        {this.homeFeatures()}
          {this.homeContribute()}
      </div>
    );
  }
}

export default withWidth()(HomePage);
