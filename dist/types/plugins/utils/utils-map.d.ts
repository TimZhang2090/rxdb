export declare function getFromMapOrCreate<MapIndex, MapValue>(map: Map<MapIndex, MapValue> | WeakMap<any, MapValue>, index: MapIndex, creator: () => MapValue, ifWasThere?: (value: MapValue) => void): MapValue;