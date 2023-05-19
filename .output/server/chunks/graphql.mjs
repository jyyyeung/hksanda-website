import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import { mkdir, createWriteStream } from 'fs';
import moment from 'moment';
import smms from 'smms-cli';
import { createServer } from 'http';
import busboy from 'busboy';
import { WriteStream } from 'fs-capacitor';
import createError from 'http-errors';
import objectPath from 'object-path';
import compression from 'compression';
import path from 'path';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateH3Handler } from '@as-integrations/h3';

const url = "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongooseConnect = () => {
  mongoose.connect(url).then(
    () => {
      console.log("Connected correctly to server!");
    },
    (err) => {
      console.log(err);
    }
  );
};

const assessmentSyllabusSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true
    },
    syllabus: [String]
  },
  {
    timestamps: true
  }
);
const AssessmentSyllabus = mongoose.model("assessment-syllabus", assessmentSyllabusSchema);

const getAssessmentSyllabus = async () => {
  return AssessmentSyllabus.find();
};
const updateAssessmentSyllabus = (_, args) => {
  console.log(args.level);
  AssessmentSyllabus.findByIdAndUpdate(
    args.level.levelId,
    {
      $set: { syllabus: args.level.syllabus, name: args.level.level }
    },
    { safe: true, upsert: true },
    function(err, model) {
      console.log(err, model);
    }
  );
};

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    strengths: {
      type: String,
      required: true
    },
    certificates: [String],
    experiences: [String]
  },
  {
    timestamps: true
  }
);
const Instructor = mongoose.model("Instructor", instructorSchema);

const getInstructors = async () => {
  return Instructor.find();
};
const updateInstructor = (_, { instructor }) => {
  console.log(instructor);
  Instructor.findByIdAndUpdate(
    instructor.instructorId,
    {
      $set: {
        name: instructor.name,
        strengths: instructor.strengths,
        certificates: instructor.certificates,
        experiences: instructor.experiences
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addInstructor = (_, args) => {
  const instructor = new Instructor({
    ...args.instructor
  });
  return instructor.save();
};
const removeInstructor = (_, { instructorId }) => {
  Instructor.findByIdAndDelete(instructorId).then(() => console.log(`Successfully Removed ${instructorId}`)).catch((error) => console.error(`Failed to Removed ${instructorId}, ${error}`));
};

const rankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    awardees: [String]
  },
  {
    timestamps: true
  }
);
const Rank = mongoose.model("Rank", rankSchema);

const getRankings = async () => {
  return Rank.find();
};
const updateRanking = (_, { details }) => {
  console.log(details);
  Rank.findByIdAndUpdate(
    details.rankId,
    {
      $set: {
        awardees: details.awardees,
        name: details.name
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};

const classSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    classroom: String,
    time: String,
    students: String,
    location: String,
    mapQuery: String
  },
  {
    timestamps: true
  }
);
const Class = mongoose.model("Class", classSchema);

const getClasses = async () => {
  return Class.find();
};
const updateClass = (_, { details }) => {
  console.log(details);
  Class.findByIdAndUpdate(
    details.classId,
    {
      $set: {
        title: details.title,
        type: details.type,
        time: details.time,
        students: details.students,
        location: details.location,
        classroom: details.classroom,
        mapQuery: details.mapQuery
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addClass = (_, args) => {
  let details = new Class({
    ...args.details
  });
  return details.save();
};
const removeClass = (_, { classId }) => {
  Class.findByIdAndDelete(classId).then(() => console.log(`Successfully Removed ${classId}`)).catch((error) => console.error(`Failed to Removed ${classId}, ${error}`));
};

function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}

function invariant(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || invariant(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}

function toNormalizedOptions(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedOptions(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => getLocation(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + printSourceLocation(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
    };

    if (this.locations != null) {
      formattedError.locations = this.locations;
    }

    if (this.path != null) {
      formattedError.path = this.path;
    }

    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }

    return formattedError;
  }
}

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind;

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */

/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return (
    (code >= 0x0061 && code <= 0x007a) || // A-Z
    (code >= 0x0041 && code <= 0x005a) // a-z
  );
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}

const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * // { Jon: '555-1234', Jenny: '867-5309' }
 * const phonesByName = keyValMap(
 *   phoneBook,
 *   entry => entry.name,
 *   entry => entry.num
 * )
 * ```
 */
function keyValMap(list, keyFn, valFn) {
  const result = Object.create(null);

  for (const item of list) {
    result[keyFn(item)] = valFn(item);
  }

  return result;
}

function toObjMap(obj) {
  if (obj == null) {
    return Object.create(null);
  }

  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  const map = Object.create(null);

  for (const [key, value] of Object.entries(obj)) {
    map[key] = value;
  }

  return map;
}

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */

function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case Kind.NULL:
      return null;

    case Kind.INT:
      return parseInt(valueNode.value, 10);

    case Kind.FLOAT:
      return parseFloat(valueNode.value);

    case Kind.STRING:
    case Kind.ENUM:
    case Kind.BOOLEAN:
      return valueNode.value;

    case Kind.LIST:
      return valueNode.values.map((node) =>
        valueFromASTUntyped(node, variables),
      );

    case Kind.OBJECT:
      return keyValMap(
        valueNode.fields,
        (field) => field.name.value,
        (field) => valueFromASTUntyped(field.value, variables),
      );

    case Kind.VARIABLE:
      return variables === null || variables === void 0
        ? void 0
        : variables[valueNode.name.value];
  }
}

/**
 * Upholds the spec rules about naming.
 */

function assertName(name) {
  name != null || devAssert(false, 'Must provide name.');
  typeof name === 'string' || devAssert(false, 'Expected name to be a string.');

  if (name.length === 0) {
    throw new GraphQLError('Expected name to be a non-empty string.');
  }

  for (let i = 1; i < name.length; ++i) {
    if (!isNameContinue(name.charCodeAt(i))) {
      throw new GraphQLError(
        `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`,
      );
    }
  }

  if (!isNameStart(name.charCodeAt(0))) {
    throw new GraphQLError(
      `Names must start with [_a-zA-Z] but "${name}" does not.`,
    );
  }

  return name;
}

/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function returns `null` or does not return a value
 * (i.e. it returns `undefined`) then an error will be raised and a `null`
 * value will be returned in the response. It is always better to validate
 *
 * Example:
 *
 * ```ts
 * const OddType = new GraphQLScalarType({
 *   name: 'Odd',
 *   serialize(value) {
 *     if (!Number.isFinite(value)) {
 *       throw new Error(
 *         `Scalar "Odd" cannot represent "${value}" since it is not a finite number.`,
 *       );
 *     }
 *
 *     if (value % 2 === 0) {
 *       throw new Error(`Scalar "Odd" cannot represent "${value}" since it is even.`);
 *     }
 *     return value;
 *   }
 * });
 * ```
 */
class GraphQLScalarType {
  constructor(config) {
    var _config$parseValue,
      _config$serialize,
      _config$parseLiteral,
      _config$extensionASTN;

    const parseValue =
      (_config$parseValue = config.parseValue) !== null &&
      _config$parseValue !== void 0
        ? _config$parseValue
        : identityFunc;
    this.name = assertName(config.name);
    this.description = config.description;
    this.specifiedByURL = config.specifiedByURL;
    this.serialize =
      (_config$serialize = config.serialize) !== null &&
      _config$serialize !== void 0
        ? _config$serialize
        : identityFunc;
    this.parseValue = parseValue;
    this.parseLiteral =
      (_config$parseLiteral = config.parseLiteral) !== null &&
      _config$parseLiteral !== void 0
        ? _config$parseLiteral
        : (node, variables) => parseValue(valueFromASTUntyped(node, variables));
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes =
      (_config$extensionASTN = config.extensionASTNodes) !== null &&
      _config$extensionASTN !== void 0
        ? _config$extensionASTN
        : [];
    config.specifiedByURL == null ||
      typeof config.specifiedByURL === 'string' ||
      devAssert(
        false,
        `${this.name} must provide "specifiedByURL" as a string, ` +
          `but got: ${inspect(config.specifiedByURL)}.`,
      );
    config.serialize == null ||
      typeof config.serialize === 'function' ||
      devAssert(
        false,
        `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`,
      );

    if (config.parseLiteral) {
      (typeof config.parseValue === 'function' &&
        typeof config.parseLiteral === 'function') ||
        devAssert(
          false,
          `${this.name} must provide both "parseValue" and "parseLiteral" functions.`,
        );
    }
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLScalarType';
  }

  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
    };
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.toString();
  }
}

// @ts-check

/** @typedef {import("./GraphQLUpload.mjs").default} GraphQLUpload */
/** @typedef {import("./processRequest.mjs").default} processRequest */

/**
 * A file expected to be uploaded as it was declared in the `map` field of a
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * The {@linkcode processRequest} function places references to an instance of
 * this class wherever the file is expected in the GraphQL operation. The scalar
 * {@linkcode GraphQLUpload} derives it’s value from {@linkcode Upload.promise}.
 */
class Upload {
  constructor() {
    /**
     * Promise that resolves file upload details. This should only be utilized
     * by {@linkcode GraphQLUpload}.
     * @type {Promise<import("./processRequest.mjs").FileUpload>}
     */
    this.promise = new Promise((resolve, reject) => {
      /**
       * Resolves the upload promise with the file upload details. This should
       * only be utilized by {@linkcode processRequest}.
       * @param {import("./processRequest.mjs").FileUpload} file File upload
       *   details.
       */
      this.resolve = (file) => {
        /**
         * The file upload details, available when the
         * {@linkcode Upload.promise} resolves. This should only be utilized by
         * {@linkcode processRequest}.
         * @type {import("./processRequest.mjs").FileUpload | undefined}
         */
        this.file = file;

        resolve(file);
      };

      /**
       * Rejects the upload promise with an error. This should only be
       * utilized by {@linkcode processRequest}.
       * @param {Error} error Error instance.
       */
      this.reject = reject;
    });

    // Prevent errors crashing Node.js, see:
    // https://github.com/nodejs/node/issues/20392
    this.promise.catch(() => {});
  }
}

// @ts-check


/** @typedef {import("./processRequest.mjs").FileUpload} FileUpload */

/**
 * A GraphQL `Upload` scalar that can be used in a
 * [`GraphQLSchema`](https://graphql.org/graphql-js/type/#graphqlschema). It’s
 * value in resolvers is a promise that resolves
 * {@link FileUpload file upload details} for processing and storage.
 * @example
 * A schema built using the function
 * [`makeExecutableSchema`](https://www.graphql-tools.com/docs/api/modules/schema_src#makeexecutableschema)
 * from [`@graphql-tools/schema`](https://npm.im/@graphql-tools/schema):
 *
 * ```js
 * import { makeExecutableSchema } from "@graphql-tools/schema/makeExecutableSchema";
 * import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
 *
 * const schema = makeExecutableSchema({
 *   typeDefs: `
 *     scalar Upload
 *   `,
 *   resolvers: {
 *     Upload: GraphQLUpload,
 *   },
 * });
 * ```
 * @example
 * A manually constructed schema with an image upload mutation:
 *
 * ```js
 * import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";
 * import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
 *
 * const schema = new GraphQLSchema({
 *   mutation: new GraphQLObjectType({
 *     name: "Mutation",
 *     fields: {
 *       uploadImage: {
 *         description: "Uploads an image.",
 *         type: GraphQLBoolean,
 *         args: {
 *           image: {
 *             description: "Image file.",
 *             type: GraphQLUpload,
 *           },
 *         },
 *         async resolve(parent, { image }) {
 *           const { filename, mimetype, createReadStream } = await image;
 *           const stream = createReadStream();
 *           // Promisify the stream and store the file, then…
 *           return true;
 *         },
 *       },
 *     },
 *   }),
 * });
 * ```
 * @example
 * In a [TypeScript](https://typescriptlang.org) module, how to import the type
 * for the {@link FileUpload file upload details} that the
 * {@linkcode GraphQLUpload} scalar resolver value promise resolves:
 *
 * ```ts
 * import type { FileUpload } from "graphql-upload/processRequest.mjs";
 * ```
 */
const GraphQLUpload = new GraphQLScalarType({
  name: "Upload",
  description: "The `Upload` scalar type represents a file upload.",
  parseValue(value) {
    if (value instanceof Upload) return value.promise;
    throw new GraphQLError("Upload value invalid.");
  },
  parseLiteral(node) {
    throw new GraphQLError("Upload literal unsupported.", { nodes: node });
  },
  serialize() {
    throw new GraphQLError("Upload serialization unsupported.");
  },
});

const GraphQLUpload$1 = GraphQLUpload;

const uploadSMMS = async (path) => {
  const res = await smms.upload(path);
  return res.data;
};

const storeUpload = async ({ stream, filename }) => {
  const newFileName = `${moment().format("YYYYMMDDHHmmss")}-${encodeURI(
    filename
  )}`;
  const rawPath = `/tmp/images/${newFileName}`;
  return new Promise(
    (resolve, reject) => stream.pipe(createWriteStream(rawPath)).on("finish", async () => {
      resolve(await uploadSMMS(rawPath));
    }).on("error", reject)
  );
};
const processUpload = async (upload) => {
  const { createReadStream, filename } = await upload;
  const stream = createReadStream();
  const path = await storeUpload({
    stream,
    filename
  });
  console.log("\u{1F680} ~ file: image.js ~ line 68 ~ processUpload ~ path", path);
  return path;
};
const singleUpload = async (_, { file }) => {
  mkdir("/tmp/images", { recursive: true }, (err) => {
    if (err)
      throw err;
  });
  const upload = await processUpload(file);
  return upload;
};

const schema$6 = new mongoose.Schema(
  {
    name: String,
    content: String
  },
  {
    timestamp: true
  }
);
const CourseContent = mongoose.model("CourseContent", schema$6);

const getCourseContents = async () => {
  return CourseContent.find();
};
const updateCourseContent = (_, { course }) => {
  console.log(course);
  CourseContent.findByIdAndUpdate(
    course.courseId,
    {
      $set: { content: course.content, name: course.name }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addCourseContent = (_, { course }) => {
  console.log(course);
  const courseContent = new CourseContent(course);
  return courseContent.save();
};

const schema$5 = new mongoose.Schema({
  title: String,
  content: String,
  masonries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Masonry"
    }
  ],
  route: String
});
const View = mongoose.model("View", schema$5);

const getView = async () => {
  return View.find();
};
const getViewByRoute = async (_, { route }) => {
  return View.findOne({ route });
};
const addView = (_, { details }) => {
  let view = new View(details);
  return view.save();
};
const updateView = (_, { details }) => {
  View.findByIdAndUpdate(
    details.viewId,
    {
      $set: { ...details }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};

const schema$4 = new mongoose.Schema(
  {
    field: String,
    to: String,
    icon: String,
    content: String
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", schema$4);

const getContacts = async () => {
  return Contact.find();
};
const updateContact = (_, { contact }) => {
  const id = contact.contactId;
  delete contact.id;
  Contact.findByIdAndUpdate(id, {
    $set: { ...contact }
  });
};
const addContact = (_, { contact }) => {
  const newContact = new Contact(contact);
  return newContact.save();
};

const schema$3 = mongoose.Schema(
  {
    company: String,
    title: String,
    images: [
      {
        imageUrl: String,
        alt: String
      }
    ],
    url: String,
    publishedDate: Date
  },
  { timestamp: true }
);
const Interview = mongoose.model("Interview", schema$3);

const getInterviews = async () => {
  return Interview.find();
};
const formatInterview = (interview) => {
  let formatted = {
    ...interview,
    publishedDate: Date.parse(interview.publishedDate)
  };
  console.log(formatted);
  return formatted;
};
const addInterview = async (_, { interview }) => {
  const newInterview = new Interview(formatInterview(interview));
  const result = await newInterview.save();
  return result;
};
const updateInterview = async (_, { interview }) => {
  const id = interview.interviewId;
  delete interview.interviewId;
  Interview.findByIdAndUpdate(id, { $set: formatInterview(interview) });
};

const schema$2 = new mongoose.Schema(
  {
    title: String,
    route: String,
    order: Number,
    images: [
      {
        imageUrl: String,
        title: String,
        paragraph: String,
        alt: String
      }
    ]
  },
  { timestamp: true }
);
const Masonry = mongoose.model("Masonry", schema$2);

const getMasonryById = async (_, { id }) => {
  return Masonry.findById(id);
};
const getMasonryByRoute = async (_, { route }) => {
  return Masonry.find({ route }).sort([["order", "asc"]]);
};
const addMasonry = async (_, { masonry }) => {
  const newMasonry = new Masonry(masonry);
  const result = newMasonry.save();
  return result;
};
const updateMasonry = async (_, { masonry }) => {
  const id = masonry.masonryId;
  delete masonry.masonryId;
  Masonry.findByIdAndUpdate(id, { $set: masonry });
};

const schema$1 = new mongoose.Schema(
  {
    route: String,
    order: Number,
    images: [
      {
        imageUrl: String,
        alt: String,
        title: String,
        paragraph: String
      }
    ]
  },
  {
    timestamp: true
  }
);
const Carousel = mongoose.model("Carousel", schema$1);

const getCarouselById = async (_, { id }) => {
  return Carousel.findById(id);
};
const getCarouselByRoute = async (_, { route }) => {
  return Carousel.find({ route });
};
const addCarousel = async (_, { carousel }) => {
  const newCarousel = new Carousel(carousel);
  const result = newCarousel.save();
  return result;
};
const updateCarousel = async (_, { carousel }) => {
  const id = carousel.carouselId;
  delete carousel.carouselId;
  Carousel.findByIdAndUpdate(id, { $set: carousel });
};

const resolvers = {
  Upload: GraphQLUpload$1,
  Query: {
    getInstructors,
    getRankings,
    getAssessmentSyllabus,
    getClasses,
    getCourseContents,
    getView,
    getViewByRoute,
    getContacts,
    getInterviews,
    getMasonryById,
    getCarouselById,
    getMasonryByRoute,
    getCarouselByRoute
  },
  Mutation: {
    addInstructor,
    updateInstructor,
    removeInstructor,
    // addPersonToRank,
    updateRanking,
    updateAssessmentSyllabus,
    singleUpload,
    addClass,
    updateClass,
    removeClass,
    updateCourseContent,
    addCourseContent,
    addView,
    updateView,
    addContact,
    updateContact,
    addInterview,
    updateInterview,
    updateMasonry,
    addMasonry,
    addCarousel,
    updateCarousel
  }
};
const resolvers$1 = resolvers;

// @ts-check

/**
 * [GraphQL multipart request spec](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * URL. Useful for error messages, etc.
 */
const GRAPHQL_MULTIPART_REQUEST_SPEC_URL =
  "https://github.com/jaydenseric/graphql-multipart-request-spec";

const GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1 = GRAPHQL_MULTIPART_REQUEST_SPEC_URL;

// @ts-check

/**
 * Safely ignores a Node.js readable stream.
 * @param {import("node:stream").Readable} stream Node.js readable stream.
 */
function ignoreStream(stream) {
  // Prevent an unhandled error from crashing the process.
  stream.on("error", () => {});

  // Waste the stream.
  stream.resume();
}

// @ts-check


/** @typedef {import("./GraphQLUpload.mjs").default} GraphQLUpload */

/**
 * Processes an incoming
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * It parses the `operations` and `map` fields to create an {@linkcode Upload}
 * instance for each expected file upload, placing references wherever the file
 * is expected in the GraphQL operation for the {@linkcode GraphQLUpload} scalar
 * to derive it’s value. Errors are created with
 * [`http-errors`](https://npm.im/http-errors) to assist in sending responses
 * with appropriate HTTP status codes. Used to create custom middleware.
 * @type {ProcessRequestFunction}
 */
function processRequest(
  request,
  response,
  {
    maxFieldSize = 1000000, // 1 MB
    maxFileSize = Infinity,
    maxFiles = Infinity,
  } = {}
) {
  return new Promise((resolve, reject) => {
    /** @type {boolean} */
    let released;

    /** @type {Error} */
    let exitError;

    /**
     * @type {{ [key: string]: unknown } | Array<
     *   { [key: string]: unknown }
     * >}
     */
    let operations;

    /**
     * @type {import("object-path").ObjectPathBound<
     *   { [key: string]: unknown } | Array<{ [key: string]: unknown }>
     * >}
     */
    let operationsPath;

    /** @type {Map<string, Upload>} */
    let map;

    const parser = busboy({
      headers: request.headers,
      defParamCharset: "utf8",
      limits: {
        fieldSize: maxFieldSize,
        fields: 2, // Only operations and map.
        fileSize: maxFileSize,
        files: maxFiles,
      },
    });

    /**
     * Exits request processing with an error. Successive calls have no effect.
     * @param {Error} error Error instance.
     * @param {boolean} [isParserError] Is the error from the parser.
     */
    function exit(error, isParserError = false) {
      if (exitError) return;

      exitError = error;

      if (map)
        for (const upload of map.values())
          if (!upload.file) upload.reject(exitError);

      // If the error came from the parser, don’t cause it to be emitted again.
      isParserError ? parser.destroy() : parser.destroy(exitError);

      request.unpipe(parser);

      // With a sufficiently large request body, subsequent events in the same
      // event frame cause the stream to pause after the parser is destroyed. To
      // ensure that the request resumes, the call to .resume() is scheduled for
      // later in the event loop.
      setImmediate(() => {
        request.resume();
      });

      reject(exitError);
    }

    parser.on("field", (fieldName, value, { valueTruncated }) => {
      if (valueTruncated)
        return exit(
          createError(
            413,
            `The ‘${fieldName}’ multipart field value exceeds the ${maxFieldSize} byte size limit.`
          )
        );

      switch (fieldName) {
        case "operations":
          try {
            operations = JSON.parse(value);
          } catch (error) {
            return exit(
              createError(
                400,
                `Invalid JSON in the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );
          }

          // `operations` should be an object or an array. Note that arrays
          // and `null` have an `object` type.
          if (typeof operations !== "object" || !operations)
            return exit(
              createError(
                400,
                `Invalid type for the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          operationsPath = objectPath(operations);

          break;
        case "map": {
          if (!operations)
            return exit(
              createError(
                400,
                `Misordered multipart fields; ‘map’ should follow ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          let parsedMap;
          try {
            parsedMap = JSON.parse(value);
          } catch (error) {
            return exit(
              createError(
                400,
                `Invalid JSON in the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );
          }

          // `map` should be an object.
          if (
            typeof parsedMap !== "object" ||
            !parsedMap ||
            Array.isArray(parsedMap)
          )
            return exit(
              createError(
                400,
                `Invalid type for the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          const mapEntries = Object.entries(parsedMap);

          // Check max files is not exceeded, even though the number of files
          // to parse might not match the map provided by the client.
          if (mapEntries.length > maxFiles)
            return exit(
              createError(413, `${maxFiles} max file uploads exceeded.`)
            );

          map = new Map();
          for (const [fieldName, paths] of mapEntries) {
            if (!Array.isArray(paths))
              return exit(
                createError(
                  400,
                  `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                )
              );

            map.set(fieldName, new Upload());

            for (const [index, path] of paths.entries()) {
              if (typeof path !== "string")
                return exit(
                  createError(
                    400,
                    `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                  )
                );

              try {
                operationsPath.set(path, map.get(fieldName));
              } catch (error) {
                return exit(
                  createError(
                    400,
                    `Invalid object path for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value ‘${path}’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                  )
                );
              }
            }
          }

          resolve(operations);
        }
      }
    });

    parser.on(
      "file",
      (fieldName, stream, { filename, encoding, mimeType: mimetype }) => {
        if (!map) {
          ignoreStream(stream);
          return exit(
            createError(
              400,
              `Misordered multipart fields; files should follow ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
            )
          );
        }

        const upload = map.get(fieldName);

        if (!upload) {
          // The file is extraneous. As the rest can still be processed, just
          // ignore it and don’t exit with an error.
          ignoreStream(stream);
          return;
        }

        /** @type {Error} */
        let fileError;

        const capacitor = new WriteStream();

        capacitor.on("error", () => {
          stream.unpipe();
          stream.resume();
        });

        stream.on("limit", () => {
          fileError = createError(
            413,
            `File truncated as it exceeds the ${maxFileSize} byte size limit.`
          );
          stream.unpipe();
          capacitor.destroy(fileError);
        });

        stream.on("error", (error) => {
          fileError = error;
          stream.unpipe();
          capacitor.destroy(fileError);
        });

        /** @type {FileUpload} */
        const file = {
          filename,
          mimetype,
          encoding,
          createReadStream(options) {
            const error = fileError || (released ? exitError : null);
            if (error) throw error;
            return capacitor.createReadStream(options);
          },
          capacitor,
        };

        Object.defineProperty(file, "capacitor", {
          enumerable: false,
          configurable: false,
          writable: false,
        });

        stream.pipe(capacitor);
        upload.resolve(file);
      }
    );

    parser.once("filesLimit", () =>
      exit(createError(413, `${maxFiles} max file uploads exceeded.`))
    );

    parser.once("finish", () => {
      request.unpipe(parser);
      request.resume();

      if (!operations)
        return exit(
          createError(
            400,
            `Missing multipart field ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
          )
        );

      if (!map)
        return exit(
          createError(
            400,
            `Missing multipart field ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
          )
        );

      for (const upload of map.values())
        if (!upload.file)
          upload.reject(createError(400, "File missing in the request."));
    });

    // Use the `on` method instead of `once` as in edge cases the same parser
    // could have multiple `error` events and all must be handled to prevent the
    // Node.js process exiting with an error. One edge case is if there is a
    // malformed part header as well as an unexpected end of the form.
    parser.on("error", (/** @type {Error} */ error) => {
      exit(error, true);
    });

    response.once("close", () => {
      released = true;

      if (map)
        for (const upload of map.values())
          if (upload.file)
            // Release resources and clean up temporary files.
            upload.file.capacitor.release();
    });

    request.once("close", () => {
      if (!request.readableEnded)
        exit(
          createError(
            499,
            "Request disconnected during file upload stream parsing."
          )
        );
    });

    request.pipe(parser);
  });
}

/**
 * File upload details that are only available after the file’s field in the
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * has begun streaming in.
 * @typedef {object} FileUpload
 * @prop {string} filename File name.
 * @prop {string} mimetype File MIME type. Provided by the client and can’t be
 *   trusted.
 * @prop {string} encoding File stream transfer encoding.
 * @prop {import("fs-capacitor").WriteStream} capacitor A private implementation
 *   detail that shouldn’t be used outside
 *   [`graphql-upload`](https://npm.im/graphql-upload).
 * @prop {FileUploadCreateReadStream} createReadStream Creates a
 *   [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 *   of the file’s contents, for processing and storage.
 */

/**
 * Creates a
 * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 * of an {@link FileUpload uploading file’s} contents, for processing and
 * storage. Multiple calls create independent streams. Throws if called after
 * all resolvers have resolved, or after an error has interrupted the request.
 * @callback FileUploadCreateReadStream
 * @param {FileUploadCreateReadStreamOptions} [options] Options.
 * @returns {import("node:stream").Readable}
 *   [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 *   of the file’s contents.
 * @see [Node.js `Readable` stream constructor docs](https://nodejs.org/api/stream.html#new-streamreadableoptions).
 * @see [Node.js stream backpressure guide](https://nodejs.org/en/docs/guides/backpressuring-in-streams).
 */

/**
 * {@linkcode FileUploadCreateReadStream} options.
 * @typedef {object} FileUploadCreateReadStreamOptions
 * @prop {import("fs-capacitor")
 *   .ReadStreamOptions["encoding"]} [options.encoding] Specify an encoding for
 *   the [`data`](https://nodejs.org/api/stream.html#event-data) chunks to be
 *   strings (without splitting multi-byte characters across chunks) instead of
 *   Node.js [`Buffer`](https://nodejs.org/api/buffer.html#buffer) instances.
 *   Supported values depend on the
 *   [`Buffer` implementation](https://github.com/nodejs/node/blob/v18.1.0/lib/buffer.js#L590-L680)
 *   and include `utf8`, `ucs2`, `utf16le`, `latin1`, `ascii`, `base64`,
 *   `base64url`, or `hex`. Defaults to `utf8`.
 * @prop {import("fs-capacitor")
 *   .ReadStreamOptions["highWaterMark"]} [options.highWaterMark] Maximum number
 *   of bytes to store in the internal buffer before ceasing to read from the
 *   underlying resource. Defaults to `16384`.
 */

/**
 * Processes an incoming
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @callback ProcessRequestFunction
 * @param {import("node:http").IncomingMessage} request
 *   [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @param {import("node:http").ServerResponse} response
 *   [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 * @param {ProcessRequestOptions} [options] Options.
 * @returns {Promise<
 *   { [key: string]: unknown } | Array<{ [key: string]: unknown }>
 * >} GraphQL operation or batch of operations for a GraphQL server to consume
 *   (usually as the request body). A GraphQL operation typically has the
 *   properties `query` and `variables`.
 */

/**
 * {@linkcode ProcessRequestFunction} options.
 * @typedef {object} ProcessRequestOptions
 * @prop {number} [maxFieldSize] Maximum allowed non file multipart form field
 *   size in bytes; enough for your queries. Defaults to `1000000` (1 MB).
 * @prop {number} [maxFileSize] Maximum allowed file size in bytes. Defaults to
 *   `Infinity`.
 * @prop {number} [maxFiles] Maximum allowed number of files. Defaults to
 *   `Infinity`.
 */

// @ts-check


/**
 * Creates [Express](https://expressjs.com) middleware that processes incoming
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using {@linkcode processRequest}, ignoring non multipart requests. It sets
 * the request `body` to be similar to a conventional GraphQL POST request for
 * following GraphQL middleware to consume.
 * @param {import("./processRequest.mjs").ProcessRequestOptions & {
 *   processRequest?: import("./processRequest.mjs").ProcessRequestFunction
 * }} options Options.
 * @returns Express middleware.
 * @example
 * Basic [`express-graphql`](https://npm.im/express-graphql) setup:
 *
 * ```js
 * import express from "express";
 * import expressGraphQL from "express-graphql";
 * import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
 *
 * import schema from "./schema.mjs";
 *
 * express()
 *   .use(
 *     "/graphql",
 *     graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
 *     expressGraphQL.graphqlHTTP({ schema })
 *   )
 *   .listen(3000);
 * ```
 */
function graphqlUploadExpress({
  processRequest: processRequest$1 = processRequest,
  ...processRequestOptions
} = {}) {
  /**
   * [Express](https://expressjs.com) middleware that processes incoming
   * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
   * using {@linkcode processRequest}, ignoring non multipart requests. It sets
   * the request `body` to be similar to a conventional GraphQL POST request for
   * following GraphQL middleware to consume.
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  function graphqlUploadExpressMiddleware(request, response, next) {
    if (!request.is("multipart/form-data")) return next();

    const requestEnd = new Promise((resolve) => request.on("end", resolve));
    const { send } = response;

    // @ts-ignore Todo: Find a less hacky way to prevent sending a response
    // before the request has ended.
    response.send =
      /** @param {Array<unknown>} args */
      (...args) => {
        requestEnd.then(() => {
          response.send = send;
          response.send(...args);
        });
      };

    processRequest$1(request, response, processRequestOptions)
      .then((body) => {
        request.body = body;
        next();
      })
      .catch((error) => {
        if (error.status && error.expose) response.status(error.status);
        next(error);
      });
  }

  return graphqlUploadExpressMiddleware;
}

const schema = `scalar Upload

scalar Date

type File {
  _id: ID!
  fileName: String!
  width: Int
  height: Int
  extname: String
  imgUrl: String!
  type: String
}

type Image {
  imageUrl: String!
  alt: String!
  title: String
  paragraph: String
}

type Instructor {
  id: ID!
  name: String!
  strengths: String!
  certificates: [String]
  experiences: [String]
}

type Rank {
  id: ID!
  name: String!
  awardees: [String]!
}

type Syllabus {
  id: ID!
  level: String
  syllabus: [String]!
}

type Class {
  id: ID!
  title: String!
  type: String!
  classroom: String
  time: String!
  students: String!
  location: String
  mapQuery: String
}

type CourseContent {
  id: ID!
  name: String!
  content: String!
}

type View {
  id: ID!
  title: String!
  content: String!
  route: String!
}

type Contact {
  id: ID!
  field: String!
  icon: String!
  to: String
  content: String!
}

type Interview {
  id: ID!
  company: String!
  title: String
  images: [Image]
  url: String
  publishedDate: Date!
}

type Masonry {
  id: ID!
  title: String
  route: String
  order: Int
  images: [Image]
}

type Carousel {
  id: ID!
  route: String
  order: Int
  images: [Image]!
}

input InstructorInput {
  instructorId: ID
  name: String!
  strengths: String!
  certificates: [String]
  experiences: [String]
}

input RankInput {
  rankId: ID!
  name: String
  awardees: [String]
}

input SyllabusInput {
  levelId: ID!
  level: String
  syllabus: [String]
}

input ClassInput {
  classId: ID
  title: String!
  type: String!
  classroom: String
  time: String!
  students: String!
  location: String
  mapQuery: String
}

input CourseContentInput {
  courseId: ID
  name: String
  content: String
}

input ViewInput {
  viewId: ID
  title: String
  content: String
  route: String
}

input ContactInput {
  contactId: ID
  field: String
  to: String
  icon: String
  content: String
}

input ImageInput {
  imageUrl: String!
  alt: String!
  title: String
  paragraph: String
}

input InterviewInput {
  interviewId: ID
  company: String
  title: String
  images: [ImageInput]
  url: String
  publishedDate: Date
}

input MasonryInput {
  masonryId: ID
  title: String
  order: Int
  route: String
  images: [ImageInput]
}

input CarouselInput {
  carouselId: ID
  route: String
  order: Int
  images: [ImageInput]
}

type Query {
  getInstructors: [Instructor]!
  getRankings: [Rank]!
  getAssessmentSyllabus: [Syllabus]!
  getClasses: [Class]!
  getImages: [File]!
  getCourseContents: [CourseContent]
  getView: [View]
  getViewByRoute(route: String): View
  getContacts: [Contact]
  getInterviews: [Interview]
  getMasonryById(id: ID): Masonry
  getMasonryByRoute(route: String): [Masonry]
  getCarouselById(id: ID): Carousel
  getCarouselByRoute(route: String): [Carousel]
}

type Mutation {
  addInstructor(instructor: InstructorInput): Instructor
  updateInstructor(instructor: InstructorInput): Instructor
  removeInstructor(instructorId: ID): Instructor
  updateRanking(details: RankInput): Rank
  addClass(details: ClassInput): Class
  updateClass(details: ClassInput): Class
  removeClass(classId: ID): Class
  updateAssessmentSyllabus(level: SyllabusInput): Syllabus
  addCourseContent(course: CourseContentInput): CourseContent
  updateCourseContent(course: CourseContentInput): CourseContent
  singleUpload(file: Upload): String
  addView(details: ViewInput): View
  updateView(details: ViewInput): View
  addContact(contact: ContactInput): Contact
  updateContact(contact: ContactInput): Contact
  addInterview(interview: InterviewInput): Interview
  updateInterview(interview: InterviewInput): Interview
  addMasonry(masonry: MasonryInput): Masonry
  updateMasonry(masonry: MasonryInput): Masonry
  updateCarousel(carousel: CarouselInput): Carousel
  addCarousel(carousel: CarouselInput): Carousel
}`;

const app = express();
mongooseConnect();
const httpServer = createServer(app);
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers$1,
  // plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  uploads: false
  // introspection: true,
  // playground: true,
});
app.use("*", cors());
app.use(graphqlUploadExpress({ maxFileSize: 1e7, maxFiles: 10 }));
app.use(compression());
app.use(express.static(path.dirname("/"), { dotfiles: "allow" }));
const staticFileMiddleware = express.static(path.dirname("/"), { dotfiles: "allow" });
app.use(staticFileMiddleware);
app.use(staticFileMiddleware);
const graphql = startServerAndCreateH3Handler(server, {});

export { graphql as default, httpServer };
//# sourceMappingURL=graphql.mjs.map
