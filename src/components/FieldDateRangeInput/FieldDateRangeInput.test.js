// react-dates needs to be initialized before using any react-dates component
// Since this is currently only component using react-dates we can do it here
// https://github.com/airbnb/react-dates#initialize
import 'react-dates/initialize';


const noop = () => null;

describe('DateRangeInput', () => {
  it('TODO, wait react-dates to work with React 16.9 without warnings', () => {
    expect('todo').toEqual('todo');
  });

  // it('matches snapshot', () => {
  //   const props = {
  //     unitType: LINE_ITEM_NIGHT,
  //     name: 'bookingDates',
  //     onBlur: noop,
  //     onChange: noop,
  //     onFocus: noop,
  //     startDateId: 'bookingStartDate',
  //     startDatePlaceholderText: 'today',
  //     endDateId: 'bookingEndDate',
  //     endDatePlaceholderText: 'tomorrow',
  //   };
  //   const tree = renderDeep(<DateRangeInput {...props} />);
  //   expect(tree).toMatchSnapshot();
  // });
});
