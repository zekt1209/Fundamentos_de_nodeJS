cmd_Release/obj.target/addon/hola.o := g++ -o Release/obj.target/addon/hola.o ../hola.cc '-DNODE_GYP_MODULE_NAME=addon' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DBUILDING_NODE_EXTENSION' -I/home/victorjg/.cache/node-gyp/20.9.0/include/node -I/home/victorjg/.cache/node-gyp/20.9.0/src -I/home/victorjg/.cache/node-gyp/20.9.0/deps/openssl/config -I/home/victorjg/.cache/node-gyp/20.9.0/deps/openssl/openssl/include -I/home/victorjg/.cache/node-gyp/20.9.0/deps/uv/include -I/home/victorjg/.cache/node-gyp/20.9.0/deps/zlib -I/home/victorjg/.cache/node-gyp/20.9.0/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -std=gnu++17 -MMD -MF ./Release/.deps/Release/obj.target/addon/hola.o.d.raw   -c
Release/obj.target/addon/hola.o: ../hola.cc \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/node.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/cppgc/common.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8config.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-array-buffer.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-local-handle.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-internal.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-version.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8config.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-object.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-maybe.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-persistent-handle.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-weak-callback-info.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-primitive.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-data.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-value.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-traced-handle.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-container.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-context.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-snapshot.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-date.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-debug.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-script.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-callbacks.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-promise.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-message.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-exception.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-extension.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-external.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-function.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-function-callback.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-template.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-memory-span.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-initialization.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-isolate.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-embedder-heap.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-microtask.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-statistics.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-unwinder.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-embedder-state-scope.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-platform.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-json.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-locker.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-microtask-queue.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-primitive-object.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-proxy.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-regexp.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-typed-array.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-value-serializer.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-wasm.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/node_version.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/node_api.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/js_native_api.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/js_native_api_types.h \
 /home/victorjg/.cache/node-gyp/20.9.0/include/node/node_api_types.h
../hola.cc:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/node.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/cppgc/common.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8config.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-array-buffer.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-local-handle.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-internal.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-version.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8config.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-object.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-maybe.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-persistent-handle.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-weak-callback-info.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-primitive.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-data.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-value.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-traced-handle.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-container.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-context.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-snapshot.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-date.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-debug.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-script.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-callbacks.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-promise.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-message.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-exception.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-extension.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-external.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-function.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-function-callback.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-template.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-memory-span.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-initialization.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-isolate.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-embedder-heap.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-microtask.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-statistics.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-unwinder.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-embedder-state-scope.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-platform.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-json.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-locker.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-microtask-queue.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-primitive-object.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-proxy.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-regexp.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-typed-array.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-value-serializer.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/v8-wasm.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/node_version.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/node_api.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/js_native_api.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/js_native_api_types.h:
/home/victorjg/.cache/node-gyp/20.9.0/include/node/node_api_types.h:
