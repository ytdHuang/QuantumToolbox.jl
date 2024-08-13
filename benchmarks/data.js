window.BENCHMARK_DATA = {
  "lastUpdate": 1723560886260,
  "repoUrl": "https://github.com/ytdHuang/QuantumToolbox.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dc43b9918cb40a17d983ef0a531f8041e2cdec1",
          "message": "Update compat with DiffEqCallbacks.jl",
          "timestamp": "2024-07-28T11:54:17+02:00",
          "tree_id": "ecc370db7234d58bf519fa056452dd7ed4630c6e",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/1dc43b9918cb40a17d983ef0a531f8041e2cdec1"
        },
        "date": 1723544314470,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7165326.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 600831996.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 66403792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3667104\nallocs=213\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13914855.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1321944\nallocs=893\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 42856032.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1497736349,
            "unit": "ns",
            "extra": "gctime=33848161.5\nmemory=3203273920\nallocs=450888\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 5028091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=103568\nallocs=75\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26563180,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3685568\nallocs=410\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 238460070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3354992\nallocs=8140\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 120913905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3356176\nallocs=8151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44385685+ytdHuang@users.noreply.github.com",
            "name": "Yi-Te Huang",
            "username": "ytdHuang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5499a17a90ecb6d1f5247884253b7b4da89633d5",
          "message": "make element-type of `zero_ket` as complex (#201)",
          "timestamp": "2024-08-13T22:12:00+08:00",
          "tree_id": "189d483666fb107bf94841146ef2f4d98e2f2e78",
          "url": "https://github.com/ytdHuang/QuantumToolbox.jl/commit/5499a17a90ecb6d1f5247884253b7b4da89633d5"
        },
        "date": 1723560885228,
        "tool": "julia",
        "benches": [
          {
            "name": "Steadystate/Direct",
            "value": 7204039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10733272\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/dense",
            "value": 595054588.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20092336\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Eigenvalues/eigenstates/sparse",
            "value": 78883056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3667104\nallocs=213\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/FFT Correlation",
            "value": 13942340,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1321944\nallocs=893\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Correlations and Spectrum/Exponential Series",
            "value": 43070298,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4822592\nallocs=465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/Dynamical Fock Dimension",
            "value": 1501320000,
            "unit": "ns",
            "extra": "gctime=27937492\nmemory=3203273920\nallocs=450888\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/sesolve",
            "value": 4982790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=103568\nallocs=75\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mesolve",
            "value": 26423623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3685568\nallocs=410\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Serial",
            "value": 236836415,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3354992\nallocs=8140\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Time Evolution/time-independent/mcsolve/Multithreaded",
            "value": 120395246,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3356176\nallocs=8151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}