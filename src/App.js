import Navbar from "./Components/Navbar";
import "./styles.css";

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        consequat risus, a consectetur dui. Sed fringilla elit nisl, in interdum
        odio convallis eget. Cras mattis enim eget nunc tincidunt scelerisque ac
        vitae augue. Aliquam efficitur ligula sed metus hendrerit, sed fermentum
        ligula faucibus. Proin mattis quis ipsum vitae commodo. Praesent blandit
        elit non urna porta, gravida dignissim tellus finibus. Nam vitae mauris
        quam. Integer a erat ante. Maecenas rhoncus enim eget odio egestas, sit
        amet suscipit nibh mattis. Donec euismod sagittis pulvinar. Suspendisse
        pulvinar porta convallis. Maecenas dictum, lacus a placerat
        sollicitudin, mi nunc ornare lorem, vel suscipit ex lacus nec lacus.
        Nulla nunc enim, gravida dapibus urna a, placerat accumsan dui.
        Vestibulum luctus est sit amet sem finibus, sit amet ullamcorper nisl
        rhoncus. Quisque malesuada, nunc sit amet dapibus faucibus, tortor sem
        gravida tortor, quis facilisis felis dolor et magna. Nam lacinia ligula
        eget felis iaculis tempus. Integer congue mauris in purus fermentum, ac
        dapibus arcu ultrices. Donec sodales sapien nec eleifend consectetur.
        Proin placerat metus quis elementum congue. Integer tempus justo vel
        gravida commodo. Nulla rhoncus libero ut velit tempor, in cursus tellus
        rutrum. Vivamus mi arcu, convallis ac felis ut, aliquet laoreet neque.
        Maecenas fringilla volutpat nisl, non scelerisque massa pharetra id.
        Donec in nisl lacus. Maecenas commodo erat ante, ut sollicitudin lectus
        lacinia a. Duis pretium velit velit, eu mollis eros facilisis vitae.
        Donec eget justo at dui consequat tincidunt a ac purus. Nullam sagittis
        mauris sit amet libero euismod tempus. Curabitur auctor nunc a ipsum
        rutrum, at iaculis tortor convallis. Fusce porttitor nisi id ullamcorper
        sodales. Ut sit amet scelerisque sem. Praesent pretium ornare diam eu
        maximus. Praesent vehicula velit ut fringilla lacinia. Sed cursus eget
        purus ultrices sodales. Phasellus id aliquet dui. Maecenas pellentesque
        vestibulum varius. Nulla facilisi. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Aenean at sapien lobortis lorem dignissim
        iaculis. Praesent lacus lorem, eleifend nec purus ac, vehicula porttitor
        tellus. Aenean condimentum arcu in justo congue posuere. Nullam volutpat
        risus ut dolor accumsan, in condimentum dui porttitor. Sed eu erat nec
        tortor accumsan maximus. Nunc condimentum, diam in tempor efficitur,
        tortor diam eleifend diam, eu vulputate nulla nulla in magna. Nullam et
        ante tempor nibh consequat vulputate ut sed urna. Curabitur imperdiet
        ligula sit amet leo condimentum consectetur. Nullam gravida tempor nulla
        ut aliquam. Phasellus egestas sem vitae tortor euismod, vitae fermentum
        velit efficitur. Praesent viverra, sem eget sagittis tincidunt, felis
        risus vehicula erat, vel molestie dui ex nec lacus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Phasellus ac consequat risus, a
        consectetur dui. Sed fringilla elit nisl, in interdum odio convallis
        eget. Cras mattis enim eget nunc tincidunt scelerisque ac vitae augue.
        Aliquam efficitur ligula sed metus hendrerit, sed fermentum ligula
        faucibus. Proin mattis quis ipsum vitae commodo. Praesent blandit elit
        non urna porta, gravida dignissim tellus finibus. Nam vitae mauris quam.
        Integer a erat ante. Maecenas rhoncus enim eget odio egestas, sit amet
        suscipit nibh mattis. Donec euismod sagittis pulvinar. Suspendisse
        pulvinar porta convallis. Maecenas dictum, lacus a placerat
        sollicitudin, mi nunc ornare lorem, vel suscipit ex lacus nec lacus.
        Nulla nunc enim, gravida dapibus urna a, placerat accumsan dui.
        Vestibulum luctus est sit amet sem finibus, sit amet ullamcorper nisl
        rhoncus. Quisque malesuada, nunc sit amet dapibus faucibus, tortor sem
        gravida tortor, quis facilisis felis dolor et magna. Nam lacinia ligula
        eget felis iaculis tempus. Integer congue mauris in purus fermentum, ac
        dapibus arcu ultrices. Donec sodales sapien nec eleifend consectetur.
        Proin placerat metus quis elementum congue. Integer tempus justo vel
        gravida commodo. Nulla rhoncus libero ut velit tempor, in cursus tellus
        rutrum. Vivamus mi arcu, convallis ac felis ut, aliquet laoreet neque.
        Maecenas fringilla volutpat nisl, non scelerisque massa pharetra id.
        Donec in nisl lacus. Maecenas commodo erat ante, ut sollicitudin lectus
        lacinia a. Duis pretium velit velit, eu mollis eros facilisis vitae.
        Donec eget justo at dui consequat tincidunt a ac purus. Nullam sagittis
        mauris sit amet libero euismod tempus. Curabitur auctor nunc a ipsum
        rutrum, at iaculis tortor convallis. Fusce porttitor nisi id ullamcorper
        sodales. Ut sit amet scelerisque sem. Praesent pretium ornare diam eu
        maximus. Praesent vehicula velit ut fringilla lacinia. Sed cursus eget
        purus ultrices sodales. Phasellus id aliquet dui. Maecenas pellentesque
        vestibulum varius. Nulla facilisi. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Aenean at sapien lobortis lorem dignissim
        iaculis. Praesent lacus lorem, eleifend nec purus ac, vehicula porttitor
        tellus. Aenean condimentum arcu in justo congue posuere. Nullam volutpat
        risus ut dolor accumsan, in condimentum dui porttitor. Sed eu erat nec
        tortor accumsan maximus. Nunc condimentum, diam in tempor efficitur,
        tortor diam eleifend diam, eu vulputate nulla nulla in magna. Nullam et
        ante tempor nibh consequat vulputate ut sed urna. Curabitur imperdiet
        ligula sit amet leo condimentum consectetur. Nullam gravida tempor nulla
        ut aliquam. Phasellus egestas sem vitae tortor euismod, vitae fermentum
        velit efficitur. Praesent viverra, sem eget sagittis tincidunt, felis
        risus vehicula erat, vel molestie dui ex nec lacus.
      </p>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
