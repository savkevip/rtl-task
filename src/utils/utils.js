import _ from "lodash";
import { always, evolve, flip, indexBy, lensProp, map, merge, prop, set } from "ramda";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

export function setPropValue(state, prop, value) {
  return set(lensProp(prop), value, state);
}

export function getData(state, type, data) {
    const ids = map(prop("id"), data);
    const lookUp = indexBy(prop("id"), data);

    return evolve(
        {
            lookUp: flip(merge)(lookUp),
            [type]: evolve({
                ids: always(ids),
                loading: always(false)
            })
        },
        state
    );
}
